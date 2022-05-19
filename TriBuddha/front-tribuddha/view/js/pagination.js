const getBrowseResultPagination = (currentPage, lastPage, tripitakaId) => {
  return `<li><a onclick="getBookData(${tripitakaId}, 1)">&lt;&lt;</a></li>
                  <li><a ${
                    currentPage > 1
                      ? `onclick="getBookData(${tripitakaId}, ${
                          currentPage - 1
                        })"`
                      : ``
                  }">&lt;</a></li>
                  ${
                    currentPage > 1
                      ? `<li class="more"><a>...</a></li>
                        ${
                          currentPage === lastPage && currentPage - 2 >= 1
                            ? `<li><a onclick="getBookData(${tripitakaId}, ${
                                currentPage - 2
                              })">${currentPage - 2}</a></li>`
                            : ``
                        }
                        <li><a onclick="getBookData(${tripitakaId}, ${
                          currentPage - 1
                        })">${currentPage - 1}</a></li>`
                      : ``
                  }
                  <li class="active"><a>${currentPage}</a></li>
                  ${
                    currentPage < lastPage
                      ? `<li><a onclick="getBookData(${tripitakaId}, ${
                          currentPage + 1
                        })">${currentPage + 1}</a></li>
                        ${
                          currentPage == 1 && currentPage + 2 <= lastPage
                            ? `<li><a onclick="getBookData(${tripitakaId}, ${
                                currentPage + 2
                              })">${currentPage + 2}</a></li>`
                            : ``
                        }
                        ${
                          lastPage > currentPage + 2
                            ? `<li class="more"><a>...</a></li>`
                            : ``
                        }`
                      : ``
                  }
                  <li><a ${
                    currentPage < lastPage
                      ? `onclick="getBookData(${tripitakaId}, ${
                          currentPage + 1
                        })"`
                      : ``
                  }">&gt;</a></li>
                  <li><a onclick="getBookData(${tripitakaId}, ${lastPage})">&gt;&gt;</a></li>`;
};

const getSearchPagination = (currentPage, lastPage) => {
  return `<li><a onclick="getSearchBookResultCategory(1)">&lt;&lt;</a></li>
                  <li><a ${
                    currentPage > 1
                      ? `onclick="getSearchBookResultCategory(${
                          currentPage - 1
                        })"`
                      : ``
                  }>&lt;</a></li>
                  ${
                    currentPage > 1
                      ? `<li class="more"><a>...</a></li>
                        ${
                          currentPage === lastPage && currentPage - 2 >= 1
                            ? `<li><a onclick="getSearchBookResultCategory(${
                                currentPage - 2
                              })">${currentPage - 2}</a></li>`
                            : ``
                        }
                        <li><a onclick="getSearchBookResultCategory(${
                          currentPage - 1
                        })">${currentPage - 1}</a></li>`
                      : ``
                  }
                  <li class="active"><a>${currentPage}</a></li>
                  ${
                    currentPage < lastPage
                      ? `<li><a onclick="getSearchBookResultCategory(${
                          currentPage + 1
                        })">${currentPage + 1}</a></li>
                        ${
                          currentPage == 1 && currentPage + 2 <= lastPage
                            ? `<li><a onclick="getSearchBookResultCategory(${
                                currentPage + 2
                              })">${currentPage + 2}</a></li>`
                            : ``
                        }
                        ${
                          lastPage > currentPage + 2
                            ? `<li class="more"><a>...</a></li>`
                            : ``
                        }`
                      : ``
                  }
                  <li><a ${
                    currentPage < lastPage
                      ? `onclick="getSearchBookResultCategory(${
                          currentPage + 1
                        })"`
                      : ``
                  }">&gt;</a></li>
                  <li><a onclick="getSearchBookResultCategory(${lastPage})">&gt;&gt;</a></li>`;
};

const getSearchResultPagination = (currentPage, lastPage) => {
  return `<li><a href="search-result.html?indexItem=0">&lt;&lt;</a></li>
                  <li><a href="${
                    currentPage > 0
                      ? `search-result.html?indexItem=${currentPage - 1}`
                      : `#`
                  }">&lt;</a></li>
                  ${
                    currentPage > 0
                      ? `<li class="more"><a href="#">...</a></li>
                        ${
                          currentPage === lastPage - 1 && currentPage - 2 >= 0
                            ? `<li><a href="search-result.html?indexItem=${
                                currentPage - 2
                              }">${currentPage - 1}</a></li>`
                            : ``
                        }
                        <li><a href="search-result.html?indexItem=${
                          currentPage - 1
                        }">${currentPage}</a></li>`
                      : ``
                  }
                  <li class="active"><a href="#">${currentPage + 1}</a></li>
                  ${
                    currentPage < lastPage - 1
                      ? `<li><a href="search-result.html?indexItem=${
                          currentPage + 1
                        }">${currentPage + 2}</a></li>
                        ${
                          currentPage == 0 && currentPage + 3 <= lastPage - 1
                            ? `<li><a href="search-result.html?indexItem=${
                                currentPage + 2
                              }">${currentPage + 3}</a></li>`
                            : ``
                        }
                        ${
                          lastPage - 1 > currentPage + 2
                            ? `<li class="more"><a href="#">...</a></li>`
                            : ``
                        }`
                      : ``
                  }
                  <li><a href="${
                    currentPage < lastPage - 1
                      ? `search-result.html?indexItem=${currentPage + 1}`
                      : `#`
                  }">&gt;</a></li>
                  <li><a href="search-result.html?indexItem=${
                    lastPage - 1
                  }">&gt;&gt;</a></li>`;
};
