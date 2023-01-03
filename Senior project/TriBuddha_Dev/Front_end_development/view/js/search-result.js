let filter;
let bookLinkParam;

$(document).ready(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const startIndex = urlParams.get("indexItem");
  const totalrecord = sessionStorage.getItem("totalrecord");
  filter = JSON.parse(sessionStorage.getItem("filter"));
  await getBookData(startIndex, totalrecord);
});

const getBookData = async (startIndex, totalrecord) => {
  const data = {
    startIndex,
    filter,
  };
  let patternStrings = [];
  for (const text of filter.texts) {
    const char = [...text];
    patternStrings.push(`(${char.join("(<br>|\\s+){0,}")})`);
  }
  const pattern = new RegExp(`(${patternStrings.join("|")})`, "g");
  const result = await axios
    .post(`${mainhost}/search-book-text/`, { ...data })
    .then((response) => {
      const items = response.data.data.docs;
      for (let i = 0; i < items.length; i++) {
        if (i === 0) {
          $("#search-book-result-content").html(
            items[i].morality_num[0] !== response.data.currentmoralityNumber
              ? `<div style="color:#bfbfbf">${items[i].show_text}</div>`
              : items[i].show_text.replace(
                  pattern,
                  (match) => `<span style="color: red">${match}</span>`,
                ),
          );
        } else {
          $("#search-book-result-content").append(
            items[i].morality_num[0] !== response.data.currentmoralityNumber
              ? `<div style="color:#bfbfbf">${items[i].show_text}</div>`
              : items[i].show_text.replace(
                  pattern,
                  (match) => `<span style="color: red">${match}</span>`,
                ),
          );
        }
        if (items[i].morality_num[0] == response.data.currentmoralityNumber) {
          if (items[0].subbook_id && items[0].subbook_id[0]) {
            window.sessionStorage.setItem("subbookId", items[0].subbook_id[0]);
          }
          window.sessionStorage.setItem(
            "startMorality",
            items[i].morality_num[0],
          );
        }
      }

      $("#search-book-result-title").html(
        `พระไตรปิฎก เล่มที่ ${getNumberTH(parseInt(items[0].tripitaka_id[0]),
        )} ${items[0].category} ${items[0].title}`,
      );

      $("#pagination-content").html(
        getSearchResultPagination(parseInt(startIndex), parseInt(totalrecord)),
      );

      bookLinkParam = `tripitaka_id=${response.data.tripitakaId}`;
    })
    .catch((error) => {
      console.log(error);
    });
};

const linkExporeBook = () => {
  window.location.href = `browse-result.html?${bookLinkParam}`;
};
