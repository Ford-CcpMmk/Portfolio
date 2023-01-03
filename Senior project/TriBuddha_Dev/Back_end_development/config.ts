const prod = {
  tribuddhaTH: {
    host: "164.92.210.152",
    port: "8983",
    core: "text_v1",//tribuddha
    protocol: "http",
  },
  tribuddhaPali: {
    host: "164.92.210.152",
    port: "8983",
    core: "text_v2", //tribuddha_pali
    protocol: "http",
  },
  bookInformation: {
    host: "164.92.210.152",
    port: "8983",
    core: "book_information",//
    protocol: "http",
  },
  defaultListBrowsePage: 3,
  defaultListSearchPage: 10,
  paginationShowNumber: 3,
};
const dev = {
  tribuddhaTH: {
    host: "127.0.0.1",
    port: "8983",
    core: "text_v1",//tribuddha
    protocol: "http",
  },
  tribuddhaPali: {
    host: "127.0.0.1",
    port: "8983",
    core: "text_v2", //tribuddha_pali
    protocol: "http",
  },
  bookInformation: {
    host: "127.0.0.1",
    port: "8983",
    core: "book_information",//
    protocol: "http",
  },
  defaultListBrowsePage: 3,
  defaultListSearchPage: 10,
  paginationShowNumber: 3,
};
module.exports = prod;