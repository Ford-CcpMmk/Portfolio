let tripitaka_id;
let startMorality;
let subbook;
let bookInfo;

$(document).ready(async () => {
  window.sessionStorage.removeItem("filter");
  const urlParams = new URLSearchParams(window.location.search);
  tripitaka_id = urlParams.get("tripitaka_id");
  startMorality = window.sessionStorage.getItem("startMorality") || 1;
  subbook = window.sessionStorage.getItem("subbookId") || null;
  await getBookData(tripitaka_id, null, startMorality, subbook);
});

getBookData = async (tripitakaId, page, startMorality, subbook) => {
  const result = await axios
    .post(`${mainhost}/browse-book/`, {
      tripitakaId,
      page,
      startMorality,
      subbook,
    })
    .then((response) => {
      const items = response.data.data.docs;
      bookInfo = response.data.bookInfo;
      for (let i = 0; i < items.length; i++) {
        if (i === 0) {
          $("#text-content").html(items[i].show_text);
        } else {
          $("#text-content.page").append(items[i].show_text);
        }
      }
      $("#text-title").html(
        `พระไตรปิฏกเล่มที่ ${getNumberTH(tripitakaId)} ${items[0].category} ${items[0].title
        }`
      );
      $("#pagination").html(
        getBrowseResultPagination(
          parseInt(response.data.page),
          response.data.lastPage,
          tripitakaId
        )
      );
      let subbookInfo;
      $("#search-morality-warpper").html("");
      if (bookInfo.sub_book) {
        $("#search-morality-warpper").append(`
          <div class="sub-book-dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="selected-subbook">
            ${subbook ? subbook : bookInfo.sub_book[0].id}
            </button>
            <ul class="dropdown-menu dropdown-menu1" id="subbook-warpper">
            </ul>
          </div>
        `);
        for (sub of bookInfo.sub_book) {
          $("#subbook-warpper").append(`
            <li><a class="dropdown-item" onclick="handleSubbook(${sub.id})">${sub.id}</a></li>
          `);
        }
      }
      if (subbook) {
        subbookInfo = bookInfo.sub_book.find((sub) => sub.id == subbook);
      }
      $("#search-morality-warpper").append(`
          <input type="number" class="form-control" aria-label="Text input with dropdown button"
            id="input-morality-number" min="1" max="${!bookInfo.sub_book
          ? bookInfo.max_number[0]
          : subbookInfo
            ? subbookInfo.max_number[0]
            : bookInfo.sub_book[0].max_number[0]
        }" placeholder="ระบุเลขข้อ (1-${!bookInfo.sub_book
          ? bookInfo.max_number[0]
          : subbookInfo
            ? subbookInfo.max_number[0]
            : bookInfo.sub_book[0].max_number[0]
        })" ${startMorality && startMorality != 1
          ? 'value="' + startMorality + '"'
          : ""
        }/>
          <div class="btn-group" role="group">
            <button type="button" class="btn" onclick="searchMoralityNumber()">
              <i class="bi bi-search"></i>
            </button>
          </div>
      `);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  return result;
};

const handleSubbook = (subbookId) => {
  subbook = subbookId;
  startMorality = 1;
  const subbookInfo = bookInfo.sub_book.find((sub) => sub.id == subbookId);
  $("#selected-subbook").html(subbookId);
  $("#input-morality-number").removeAttr("value");
  $("#input-morality-number").attr({
    max: subbookInfo.max_number[0],
    placeholder: `ระบุเลขข้อ (1-${subbookInfo.max_number[0]})`,
  });
};

const searchMoralityNumber = async () => {
  let subbookInfo;
  if (bookInfo.sub_book) {
    if (subbook) {
      subbookInfo = bookInfo.sub_book.find((sub) => sub.id == subbook);
    } else {
      subbookInfo = bookInfo.sub_book[0];
      subbook = subbookInfo.id;
    }
  }
  const maxNumber = subbookInfo
    ? subbookInfo.max_number[0]
    : bookInfo.max_number[0];
  startMorality = $("#input-morality-number").val();

  if(!startMorality) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'กรุณากรอกข้อมูลให้ครบก่อนทำการค้นหา!',
    });
    return;
  }

  if (startMorality >= 1 && startMorality <= maxNumber) {
    await getBookData(tripitaka_id, null, startMorality, subbook);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'กรุณาห้ามกรอกเกินเลขข้อสูงสุดของเล่ม!',
    });
    return;
  }
};
