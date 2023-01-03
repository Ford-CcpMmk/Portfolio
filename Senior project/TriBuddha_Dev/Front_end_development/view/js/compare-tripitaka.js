let booksTH = [];
let booksPali = [];

$(document).ready(async () => {
  window.sessionStorage.removeItem("filter");
  await setAllBook("TH", "ฉบับหลวง");
  await setAllBook("Pali", "ฉบับบาลีอักษรไทย");
  await settripitakaId(1, 1, "TH");
  await settripitakaId(1, 1, "Pali");
});

let searchCompareBookTH = { bookType: "TH" };
let searchCompareBookPali = { bookType: "Pali" };

const setAllBook = async (bookType, bookVersion) => {
  const result = await axios
    .post(`${mainhost}/get-all-book/`, {
      bookVersion: bookVersion,
    })
    .then((response) => {
      $(`#all-book-${bookType.toLowerCase()}-content`).html("");
      const items = response.data.data.docs;
      for (const category of items) {
        for (const book of category.book) {
          if (bookType === "TH") {
            booksTH.push({
              ...book,
            });
          } else {
            booksPali.push({
              ...book,
            });
          }
        }
      }
      const books = bookType === "TH" ? booksTH : booksPali;
      for (let i = 0; i < books.length; i++) {
        if (i === 0) {
          if (books[i].sub_book && books[i].sub_book.length > 0) {
            for (let j = 0; j < books[i].sub_book.length; j++) {
              if (j === 0) {
                $(`#all-book-${bookType.toLowerCase()}-content`).html(
                  `<li><a class="dropdown-item" onclick="settripitakaId(${books[i].id}, ${books[i].sub_book[j].id}, '${bookType}')">เล่ม ${books[i].sub_book[j].id} ${books[i].title}</a></li>`,
                );
              } else {
                $(`#all-book-${bookType.toLowerCase()}-content`).append(
                  `<li><a class="dropdown-item" onclick="settripitakaId(${books[i].id}, ${books[i].sub_book[j].id},'${bookType}')">เล่ม ${books[i].sub_book[j].id} ${books[i].title}</a></li>`,
                );
              }
            }
          } else {
            $(`#all-book-${bookType.toLowerCase()}-content`).html(
              `<li><a class="dropdown-item" onclick="settripitakaId(${books[i].id}, ${books[i].id}, '${bookType}')">เล่ม ${books[i].id} ${books[i].title}</a></li>`,
            );
          }
        } else {
          if (books[i].sub_book && books[i].sub_book.length > 0) {
            for (const subbook of books[i].sub_book) {
              $(`#all-book-${bookType.toLowerCase()}-content`).append(
                `<li><a class="dropdown-item" onclick="settripitakaId(${books[i].id}, ${subbook.id},'${bookType}')">เล่ม ${subbook.id} ${books[i].title}</a></li>`,
              );
            }
          } else {
            $(`#all-book-${bookType.toLowerCase()}-content`).append(
              `<li><a class="dropdown-item" onclick="settripitakaId(${books[i].id}, ${books[i].id}, '${bookType}')">เล่ม ${books[i].id} ${books[i].title}</a></li>`,
            );
          }
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const settripitakaId = (tripitakaId, subbookId, bookVersion) => {
  const books = bookVersion === "TH" ? booksTH : booksPali;
  const book = books.find((b) => b.id == tripitakaId);
  const subbook =
    tripitakaId !== subbookId
      ? book.sub_book.find((sub) => sub.id == subbookId)
      : {};
  $(`#morality-number-${bookVersion.toLowerCase()}`).attr(
    "placeholder",
    `ระบุเลขข้อ ( 1 - ${
      subbook && subbook.max_number ? subbook.max_number[0] : book.max_number[0]
    })`,
  );
  $(`#morality-number-${bookVersion.toLowerCase()}`).attr(
    "max",
    `${
      subbook && subbook.max_number ? subbook.max_number[0] : book.max_number[0]
    }`,
  );
  $(`#${bookVersion.toLowerCase()}-book-dropdown`).html(`เล่ม ${subbookId}`);
  if (bookVersion === "TH") {
    searchCompareBookTH["tripitakaId"] = parseInt(tripitakaId);
    searchCompareBookTH["subbookId"] =
      tripitakaId == subbookId ? parseInt(tripitakaId) : parseFloat(subbookId);
  } else {
    searchCompareBookPali["tripitakaId"] = parseInt(tripitakaId);
    searchCompareBookPali["subbookId"] =
      tripitakaId == subbookId ? parseInt(tripitakaId) : parseFloat(subbookId);
  }
};

const setMoralityNumber = (bookType) => {
  bookType === "TH"
    ? (searchCompareBookTH["moralityNumber"] = parseInt(event.target.value))
    : (searchCompareBookPali["moralityNumber"] = parseInt(event.target.value));
};

const getCompareBook = async (bookType) => {
  const books = bookType === "TH" ? booksTH : booksPali;
  const data = bookType === "TH" ? searchCompareBookTH : searchCompareBookPali;
  const book = books.find((b) => b.id == data.tripitakaId);
  const subbook = book.sub_book
    ? book.sub_book.find((sb) => sb.id == data.subbookId)
    : {};
  const max_number =
    subbook && subbook.max_number ? subbook.max_number[0] : book.max_number[0];
  if (!(data && data.bookType && data.tripitakaId && data.moralityNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'กรุณากรอกข้อมูลให้ครบก่อนทำการค้นหา!'
    });
    return;
  }
  if (data.moralityNumber > max_number) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'กรุณาห้ามกรอกเกินเลขข้อสูงสุดของเล่ม!'
    });
    return;
  }
  const result = await axios
    .post(`${mainhost}/compare-text`, {
      ...data,
    })
    .then((response) => {
      const result = response.data.data.docs;
      $(`#compare-book-title-${bookType.toLowerCase()}`).html(
        `พระไตรปิฏกเล่มที่ ${getNumberTH(data.tripitakaId)} ${
          result[0].category
        } ${result[0].title}`,
      );
      $(`#compare-book-morality-${bookType.toLowerCase()}`).html(
        data.moralityNumber,
      );
      for (let i = 0; i < result.length; i++) {
        if (i === 0) {
          $(`#compare-book-content-${bookType.toLowerCase()}`).html(
            result[i].morality_num[0] !== data.moralityNumber
              ? `<div style="color:#bfbfbf">${result[i].show_text}</div>`
              : result[i].show_text,
          );
        } else {
          $(`#compare-book-content-${bookType.toLowerCase()}`).append(
            result[i].morality_num[0] !== data.moralityNumber
              ? `<div style="color:#bfbfbf">${result[i].show_text}</div>`
              : result[i].show_text,
          );
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
