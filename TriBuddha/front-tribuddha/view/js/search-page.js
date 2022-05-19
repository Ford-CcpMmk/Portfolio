let filter = {
  texts: [],
  categories: [],
  tripitakaId: "*",
  startMoralityNumber: "*",
  endMoralityNumber: "*",
  isRanking: true,
};
let isSubbookMode = false;
let totalrecord = 0;
let books = [];
let bookInfo;
let tempcategory = [];

$(document).ready(async () => {
  await setAllBook();
  const localfilter = sessionStorage.getItem("filter") || null;
  if(localfilter) {
    filter = {...JSON.parse(localfilter)};
    await getSearchBookResultDefault(1);
    await setDefaultFilter();
  }
});

$("input[name='category']").change(async () => {
  filter.tripitakaId = "*";
  $("#selected-book").html("เลือกทั้งหมด");
  delete filter["subbookMoralityNumber"];
  isSubbookMode = false;
  $("#morality-number-content").html(`
        <div class="col-md-6">
          <input type="number" class="form-control" id="startMoralityNumber" placeholder="ข้อเริ่มต้น">
        </div>
        <div class="col-md-6">
          <input type="number" class="form-control" id="endMoralityNumber" placeholder="ข้อท้าย">
        </div>
      `);
  const index = filter.categories.indexOf(event.target.value);
  if (index !== -1) {
    filter.categories = filter.categories.filter((element) => {
      return element !== event.target.value;
    });
  } else {
    filter.categories.push(event.target.value);
  }
  await setBooks();
  // await setAllBook();
});

const handleAllCategory = async () => {
  filter.tripitakaId = "*";
  $("#selected-book").html("เลือกทั้งหมด");
  delete filter["subbookMoralityNumber"];
  isSubbookMode = false;
  $("#morality-number-content").html(`
        <div class="col-md-6">
          <input type="number" class="form-control" id="startMoralityNumber" placeholder="ข้อเริ่มต้น">
        </div>
        <div class="col-md-6">
          <input type="number" class="form-control" id="endMoralityNumber" placeholder="ข้อท้าย">
        </div>
      `);
  if ($(event.target).text() === "Uncheck All") {
    filter.categories = [];
  } else {
    filter.categories = ["พระสุตตันตปิฎก", "พระวินัยปิฎก", "พระอภิธรรมปิฎก"];
  }
  await setBooks();
  //await setAllBook();
};

const settripitakaId = (tripitakaId) => {
  filter.tripitakaId = tripitakaId;
  if (tripitakaId !== "*") {
    const book = books.find((book) => book.id == tripitakaId);
    if (book.sub_book && book.sub_book.length > 0) {
      isSubbookMode = true;
      filter["subbookMoralityNumber"] = [];
      $("#morality-number-content").html("");
      for (const sub of book.sub_book) {
        filter["subbookMoralityNumber"].push({
          subbookId: sub.id,
          subbookstartMoralityNumber: "*",
          subbookendMoralityNumber: "*",
        });
        $("#morality-number-content").append(`
          <div class="col-2">
            <div class="form-check">
              <label for="subbook-${sub.id}" class="col-form-label">
                <input class="form-check-input" type="checkbox" id="subbook-${sub.id}" name="tripitakaId" checked>
                ${sub.id}
              </label>
            </div>
          </div>
          <div class="col-md-5">
            <input class="form-control" type="number" id="morality-min-number-${sub.id}" placeholder="ข้อเริ่มต้น (1)" min="1" max="${sub.max_number[0]}">
          </div>
          <div class="col-md-5">
            <input class="form-control" type="number" id="morality-max-number-${sub.id}" placeholder="ข้อสุดท้าย (${sub.max_number[0]})" min="1" max="${sub.max_number[0]}">
          </div>
        `);
      }
    } else {
      delete filter["subbookMoralityNumber"];
      isSubbookMode = false;
      $("#morality-number-content").html(`
        <div class="col-md-6">
          <input type="number" class="form-control" id="startMoralityNumber" placeholder="ข้อเริ่มต้น (1)">
        </div>
        <div class="col-md-6">
          <input type="number" class="form-control" id="endMoralityNumber" placeholder="ข้อสุดท้าย (${book.max_number[0]})">
        </div>
      `);
    }
  } else {
    delete filter["subbookMoralityNumber"];
    isSubbookMode = false;
    $("#morality-number-content").html(`
        <div class="col-md-6">
          <input type="number" class="form-control" id="startMoralityNumber" placeholder="ข้อเริ่มต้น">
        </div>
        <div class="col-md-6">
          <input type="number" class="form-control" id="endMoralityNumber" placeholder="ข้อท้าย">
        </div>
      `);
  }
  $("#selected-book").html(
    `${tripitakaId === "*" ? "เลือกทั้งหมด" : `เล่มที่ ${tripitakaId}`}`,
  );
};

const setAllBook = async () => {
  const result = await axios
    .post(`${mainhost}/get-all-book/`, {
      bookVersion: "ฉบับหลวง",
    })
    .then((response) => {
      bookInfo = response.data.data.docs;
      $(`#all-book-content`).html(
        `<li><a class="dropdown-item" onclick="settripitakaId('*')">เลือกทั้งหมด</a></li>`,
      );
      for (const category of bookInfo) {
        filter.categories.push(category.display_name);
        tempcategory.push(category.display_name);
        $(`#categories`).append(
          `<h6><a name="categoryButton" id="categoryButton${category.id}" onclick="selectCategory('${category.display_name}')"> ${category.display_name} <span id="category${category.id}">( 0 )</span></a></h6>`,
        );
        for (const book of category.book) {
          books.push({
            ...book,
          });
          $(`#all-book-content`).append(
            `<li><a class="dropdown-item" onclick="settripitakaId(${book.id})">เล่ม ${book.id} ${book.title}</a></li>`,
          );
        }
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const getSearchBookResult = async (page) => {
  $("a[name='categoryButton']").removeAttr("style");
  $($("a[name='categoryButton']")[0]).css("color", "#6fc754");
  filter.categories = [];
  const categoryInputs = $(`input[name='category']`);
  for (let i = 0; i < categoryInputs.length; i++) {
    const isChecked = $(categoryInputs[i]).prop("checked");
    if (isChecked) {
      filter.categories.push($(categoryInputs[i]).val());
    }
  }
  tempcategory = [...filter.categories];

  if (isSubbookMode) {
    const subbookMoralityNumbers = $("input[name='tripitakaId']");
    for (const subbookMoralityNumber of subbookMoralityNumbers) {
      const subbookId = $(`label[for="${subbookMoralityNumber.id}"]`)
        .text()
        .trim();
      if (subbookMoralityNumber.checked) {
        const subbookItem = filter.subbookMoralityNumber.find(
          (subbook) => subbook.subbookId === subbookId,
        );
        if (subbookItem) {
          subbookItem.subbookId = subbookId;
          subbookItem.subbookstartMoralityNumber =
            document.getElementById(`morality-min-number-${subbookId}`).value ||
            "*";
          subbookItem.subbookendMoralityNumber =
            document.getElementById(`morality-max-number-${subbookId}`).value ||
            "*";
        } else {
          filter["subbookMoralityNumber"].push({
            subbookId: subbookId,
            subbookstartMoralityNumber:
              $(`#morality-min-number-${subbookId}`).val() || "*",
            subbookendMoralityNumber:
              $(`#morality-max-number-${subbookId}`).val() || "*",
          });
        }
      } else {
        filter.subbookMoralityNumber = filter.subbookMoralityNumber.filter(
          (subbook) => {
            return subbook.subbookId !== subbookId;
          },
        );
      }
    }
  } else {
    filter.startMoralityNumber =
      parseInt($("#startMoralityNumber").val()) || "*";
    filter.endMoralityNumber = parseInt($("#endMoralityNumber").val()) || "*";
  }

  filter.texts = [];

  const value = $("#seach-texts").val();
  if (value) {
    const values = value.split(" ");
    await setTextFilter(values);
  }

  const pattern = new RegExp(`(${filter.texts.join("|")})`, "g");
  const data = {
    page,
    filter: { ...filter },
  };

  const result = await axios
    .post(`${mainhost}/search-book/`, { ...data })
    .then((response) => {
      const result = response.data.data.docs;
      const lastPage = response.data.lastPage;
      const defaultNumber = response.data.defaultNumber;
      const heightlight = response.data.highlighting;
      if (result.length > 0) {
        $("#search-conent").html(``);
        for (let i = 0; i < result.length; i++) {
          $("#search-conent").append(`<tr>
              <td width="17%">${(page - 1) * defaultNumber + (i + 1)}</td>
              <td>
                <a onclick="redirectSearchResult(${
                  (page - 1) * defaultNumber + i
                })">
                  <p>
                    เล่ม ${
                      result[i].subbook_id
                        ? result[i].subbook_id
                        : result[i].tripitaka_id
                    } ${result[i].category} ${result[i].title} ข้อ ${
            result[i].morality_num[0]
          }
                  </p>
                  <p style="overflow: hidden;text-overflow: ellipsis;max-height: 3.6em;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                    ${heightlight[result[i].id].text}
                  </p>
                </a>
              </td>
            </tr>`);
        }
        $("#total-result").html(
          `แสดงทั้งหมด ${(page - 1) * defaultNumber + 1} - ${
            (page - 1) * defaultNumber + result.length
          } รายการ จาก ${response.data.data.numFound} รายการ`,
        );
        totalrecord = response.data.data.numFound;
        $("#pagination-content").html(getSearchPagination(page, lastPage));
        $("#total-search-title").html(
          `พบทั้งหมด ${response.data.data.numFound} รายการ`,
        );
        let categoryName = "";
        const facetCategory = response.data.facet;
        for (let i = 0; i < facetCategory.length; i++) {
          if (i % 2 === 0) {
            categoryName = facetCategory[i];
          } else {
            const category = bookInfo.find(
              (cat) => cat.display_name === categoryName,
            );
            $(`#category${category.id}`).html(`( ${facetCategory[i]} )`);
          }
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'ไม่พบคำที่ค้นหา!'
        })
        $("#search-conent").html(``);
        $("#total-result").html(``);
        for (const category of bookInfo) {
          $(`#category${category.id}`).html(`( 0 )`);
        }
        $("#total-search-title").html(
          `พบทั้งหมด ${response.data.data.numFound} รายการ`,
        );
        $("#pagination-content").html(`<li><a>&lt;&lt;</option>
                      <li><a>&lt;</option>
                      <li class="active"><a>1</option>
                      <li><a>&gt;</option>
                      <li><a>&gt;&gt;</option>`);
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  // }
};

const getSearchBookResultCategory = async (page) => {
  const data = {
    page,
    filter: { ...filter },
  };
  const result = await axios
    .post(`${mainhost}/search-book/`, { ...data })
    .then((response) => {
      const result = response.data.data.docs;
      const lastPage = response.data.lastPage;
      const defaultNumber = response.data.defaultNumber;
      const heightlight = response.data.highlighting;
      if (result.length > 0) {
        $("#search-conent").html(``);
        for (let i = 0; i < result.length; i++) {
          $("#search-conent").append(`<tr>
            <td width="17%">${(page - 1) * defaultNumber + (i + 1)}</td>
            <td>
              <a onclick="redirectSearchResult(${
                (page - 1) * defaultNumber + i
              })">
                <p>
                  เล่ม ${
                    result[i].subbook_id
                      ? result[i].subbook_id
                      : result[i].tripitaka_id
                  } ${result[i].category} ${result[i].title} ข้อ ${
            result[i].morality_num[0]
          }
                </p>
                <p style="overflow: hidden;text-overflow: ellipsis;max-height: 3.6em;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                  ${heightlight[result[i].id].text}
                </p>
              </a>
            </td>
          </tr>`);
        }
        $("#total-result").html(
          `แสดงทั้งหมด ${(page - 1) * defaultNumber + 1} - ${
            (page - 1) * defaultNumber + result.length
          } รายการ จาก ${response.data.data.numFound} รายการ`,
        );
        totalrecord = response.data.data.numFound;
        $("#pagination-content").html(getSearchPagination(page, lastPage));
      } else {
        $("#search-conent").html(``);
        $("#total-result").html(``);
        $("#pagination-content").html(`<li><a>&lt;&lt;</option>
                    <li><a>&lt;</option>
                    <li class="active"><a>1</option>
                    <li><a>&gt;</option>
                    <li><a>&gt;&gt;</option>`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSearchBookResultDefault = async (page) => {
  const data = {
    page,
    filter: { ...filter },
  };
  const result = await axios
    .post(`${mainhost}/search-book/`, { ...data })
    .then((response) => {
      const result = response.data.data.docs;
      const lastPage = response.data.lastPage;
      const defaultNumber = response.data.defaultNumber;
      const heightlight = response.data.highlighting;
      if (result.length > 0) {
        $("#search-conent").html(``);
        for (let i = 0; i < result.length; i++) {
          $("#search-conent").append(`<tr>
            <td width="17%">${(page - 1) * defaultNumber + (i + 1)}</td>
            <td>
              <a onclick="redirectSearchResult(${
                (page - 1) * defaultNumber + i
              })">
                <p>
                  เล่ม ${
                    result[i].subbook_id
                      ? result[i].subbook_id
                      : result[i].tripitaka_id
                  } ${result[i].category} ${result[i].title} ข้อ ${
            result[i].morality_num[0]
          }
                </p>
                <p style="overflow: hidden;text-overflow: ellipsis;max-height: 3.6em;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                  ${heightlight[result[i].id].text}
                </p>
              </a>
            </td>
          </tr>`);
        }
        $("#total-result").html(
          `แสดงทั้งหมด ${(page - 1) * defaultNumber + 1} - ${
            (page - 1) * defaultNumber + result.length
          } รายการ จาก ${response.data.data.numFound} รายการ`,
        );
        totalrecord = response.data.data.numFound;
        $("#pagination-content").html(getSearchPagination(page, lastPage));
        $("#total-search-title").html(
          `พบทั้งหมด ${response.data.data.numFound} รายการ`,
        );
        let categoryName = "";
        const facetCategory = response.data.facet;
        for (let i = 0; i < facetCategory.length; i++) {
          if (i % 2 === 0) {
            categoryName = facetCategory[i];
          } else {
            const category = bookInfo.find(
              (cat) => cat.display_name === categoryName,
            );
            $(`#category${category.id}`).html(`( ${facetCategory[i]} )`);
          }
        }
      } else {
        $("#search-conent").html(``);
        $("#total-result").html(``);
        $("#pagination-content").html(`<li><a>&lt;&lt;</option>
                    <li><a>&lt;</option>
                    <li class="active"><a>1</option>
                    <li><a>&gt;</option>
                    <li><a>&gt;&gt;</option>`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getRegExString = (strings) => {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += `${string[i]}|`;
  }
  result.slice(0, -1);
  return `(${result})`;
};

const selectCategory = async (categoryName) => {
  filter.categories = [];
  $("a[name='categoryButton']").removeAttr("style");
  if (categoryName === "แสดงทั้งหมด") {
    $($("a[name='categoryButton']")[0]).css("color", "#6fc754");
    filter.categories = tempcategory;
  } else {
    const category = bookInfo.find((cat) => cat.display_name === categoryName);
    $(`#categoryButton${category.id}`).css("color", "#6fc754");
    filter.categories.push(category.display_name);
  }
  const index = tempcategory.indexOf(filter.categories[0]);
  if (index === -1) {
    filter.categories = ["Null"];
  }
  await getSearchBookResultCategory(1);
};

const redirectSearchResult = (indexItem) => {
  sessionStorage.setItem("filter", JSON.stringify(filter));
  sessionStorage.setItem("totalrecord", totalrecord);
  window.location.href = `search-result.html?indexItem=${indexItem}`;
};

const setTextFilter = (values) => {
  values.forEach((text) => {
    const index = filter.texts.indexOf(text);
    if (index === -1) {
      filter.texts.push(text);
    }
  });
};

const setBooks = () => {
  $(`#all-book-content`).html(
    `<li><a class="dropdown-item" onclick="settripitakaId('*')">เลือกทั้งหมด</a></li>`,
  );
  for (const category of tempcategory) {
    if (filter.categories.indexOf(category) !== -1) {
      const books = bookInfo.find((cat) => cat.display_name === category).book;
      for (const book of books) {
        $(`#all-book-content`).append(
          `<li><a class="dropdown-item" onclick="settripitakaId(${book.id})">เล่ม ${book.id} ${book.title}</a></li>`,
        );
      }
    }
  }
};

const setDefaultFilter = async () => {
  const value = filter.texts.join(' ');
  $("#seach-texts").val(value);

  $(`input[name='category']`).prop( "checked", false );
  for(const category of filter.categories) {
    $(`input[name='category'][value='${category}']`).prop( "checked", true );
  }

  const subbookMoralityNumberTemp = [...filter.subbookMoralityNumber];

  await settripitakaId(filter.tripitakaId);

  filter.subbookMoralityNumber = [...subbookMoralityNumberTemp];

  if (filter.subbookMoralityNumber) {
    const subbookMoralityNumbers = $("input[name='tripitakaId']");
    for(const item of subbookMoralityNumbers) {
      $(item).prop( "checked", false );
    }
    for(const subbookMoralityNumber of filter.subbookMoralityNumber) {
      document.getElementById(`subbook-${subbookMoralityNumber.subbookId}`).checked = true
      if(subbookMoralityNumber.subbookstartMoralityNumber !== '*') {
        document.getElementById(`morality-min-number-${subbookMoralityNumber.subbookId}`).value = subbookMoralityNumber.subbookstartMoralityNumber
      }
      if(subbookMoralityNumber.subbookendMoralityNumber !== '*') {
        document.getElementById(`morality-max-number-${subbookMoralityNumber.subbookId}`).value = subbookMoralityNumber.subbookendMoralityNumber
      }
    }
  } else {
    $("#startMoralityNumber").val(filter.startMoralityNumber);
    $("#endMoralityNumber").val(filter.endMoralityNumber);
  }

  $("#gridCheck").prop( "checked", filter.isRanking )

}
