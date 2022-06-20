// @ts-nocheck
// ** React Imports
import { useState, Fragment } from "react";

// ** Table Columns
import {
  data,
  advSearchColumns,
} from "../../../../supercomponents/tables/data-tables/data";

// ** Third Party Components
import Flatpickr from "react-flatpickr";
import ReactPaginate from "react-paginate";
import { ChevronDown, FileText, Printer } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// ** Styles
import "../../../../@core/scss/react/libs/flatpickr/flatpickr.scss";
import ReactSelect from "react-select";
import { selectThemeColors } from "../../../../utility/Utils";
import { Copy, File, Grid, Share } from "ts-react-feather-icons";
import { spawn } from "child_process";
import EmptyMessage from "./EmptyMessage";

const UsersTable = () => {
  // ** States
  const [Picker, setPicker] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchPost, setSearchPost] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchSalary, setSearchSalary] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [searchValue, setSearchValue] = useState('')

  // ** Function to handle Pagination
  const handlePagination = (page) => setCurrentPage(page.selected);

  // ** Table data to render
  const dataToRender = () => {
    if (
      searchName.length ||
      searchPost.length ||
      searchEmail.length ||
      searchCity.length ||
      searchSalary.length ||
      Picker.length
    ) {
      return filteredData;
    } else {
      return data;
    }
  };

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={Math.ceil(dataToRender().length / 7) || 1}
      breakLabel={"..."}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName={
        "pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
      }
    />
  );

  // ** Function to handle name filter
  const handleNameFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    const dataToFilter = () => {
      if (
        searchEmail.length ||
        searchPost.length ||
        searchCity.length ||
        searchSalary.length ||
        Picker.length
      ) {
        return filteredData;
      } else {
        return data;
      }
    };

    setSearchName(value);
    if (value.length) {
      updatedData = dataToFilter().filter((item) => {
        const startsWith = item.full_name
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item.full_name
          .toLowerCase()
          .includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData([...updatedData]);
      setSearchName(value);
    }
  };

  // ** Function to handle email filter
  const handleEmailFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    const dataToFilter = () => {
      if (
        searchName.length ||
        searchPost.length ||
        searchCity.length ||
        searchSalary.length ||
        Picker.length
      ) {
        return filteredData;
      } else {
        return data;
      }
    };

    setSearchEmail(value);
    if (value.length) {
      updatedData = dataToFilter().filter((item) => {
        const startsWith = item.email
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item.email.toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData([...updatedData]);
      setSearchEmail(value);
    }
  };

  // ** Function to handle post filter
  const handlePostFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    const dataToFilter = () => {
      if (
        searchEmail.length ||
        searchName.length ||
        searchCity.length ||
        searchSalary.length ||
        Picker.length
      ) {
        return filteredData;
      } else {
        return data;
      }
    };

    setSearchPost(value);
    if (value.length) {
      updatedData = dataToFilter().filter((item) => {
        const startsWith = item.post
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item.post.toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData([...updatedData]);
      setSearchPost(value);
    }
  };

  // ** Function to handle city filter
  const handleCityFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    const dataToFilter = () => {
      if (
        searchEmail.length ||
        searchName.length ||
        searchPost.length ||
        searchSalary.length ||
        Picker.length
      ) {
        return filteredData;
      } else {
        return data;
      }
    };

    setSearchCity(value);
    if (value.length) {
      updatedData = dataToFilter().filter((item) => {
        const startsWith = item.city
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item.city.toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData([...updatedData]);
      setSearchCity(value);
    }
  };

  // ** Function to handle salary filter
  const handleSalaryFilter = (e) => {
    const value = e.target.value;
    let updatedData = [];
    const dataToFilter = () => {
      if (
        searchEmail.length ||
        searchName.length ||
        searchPost.length ||
        searchCity.length ||
        Picker.length
      ) {
        return filteredData;
      } else {
        return data;
      }
    };

    setSearchSalary(value);
    if (value.length) {
      updatedData = dataToFilter().filter((item) => {
        const startsWith = item.salary
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = item.salary
          .toLowerCase()
          .includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData([...updatedData]);
      setSearchSalary(value);
    }
  };

  // ** Function to handle date filter
  const handleDateFilter = (range) => {
    const arr = [];
    let updatedData = [];
    const dataToFilter = () => {
      if (
        searchEmail.length ||
        searchName.length ||
        searchPost.length ||
        searchCity.length ||
        searchSalary.length
      ) {
        return filteredData;
      } else {
        return data;
      }
    };

    range.map((i) => {
      const date = new Date(i);

      const year = date.getFullYear();

      let month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : `0${month}`;

      let day = date.getDate().toString();
      day = day.length > 1 ? day : `0${day}`;

      arr.push(`${month}/${day}/${year}`);
      return true;
    });

    setPicker(range);

    if (range.length) {
      updatedData = dataToFilter().filter((item) => {
        return (
          new Date(item.start_date).getTime() >= new Date(arr[0]).getTime() &&
          new Date(item.start_date).getTime() <= new Date(arr[1]).getTime()
        );
      });
      setFilteredData([...updatedData]);
      setPicker(range);
    }
  };

   // ** Downloads CSV
   function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

   // ** Function to handle filter
   const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }


  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom d-flex">
          <Col>
            <CardTitle tag="h4">Поисковая система</CardTitle>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-end mt-1 me-2"
            md="3"
            sm="10"
          >
            <Label className="me-1" for="search-input">
              Поиск
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
          <Col md={2} className="me-75">
            <div className="d-flex mt-md-0 mt-1">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="secondary" caret outline>
                  <Share size={15} />
                  <span className="align-middle ms-50">Export</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="w-100">
                    <Printer size={15} />
                    <span className="align-middle ms-50">Print</span>
                  </DropdownItem>
                  <DropdownItem
                    className="w-100"
                    onClick={() => downloadCSV(data)}
                  >
                    <FileText size={15} />
                    <span className="align-middle ms-50">CSV</span>
                  </DropdownItem>
                  <DropdownItem
                    className="w-100"
                    onClick={() => downloadCSV(data)}
                  >
                    <Grid size={15} />
                    <span className="align-middle ms-50">Excel</span>
                  </DropdownItem>
                  <DropdownItem className="w-100">
                    <File size={15} />
                    <span className="align-middle ms-50">PDF</span>
                  </DropdownItem>
                  <DropdownItem className="w-100">
                    <Copy size={15} />
                    <span className="align-middle ms-50">Copy</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </Col>
        </CardHeader>
        <CardBody>
          <Row className="mt-1 mb-50">
            <Col md="2" className="mb-1">
              <Label className="form-label" for="name">
                Баланс
              </Label>
              <ReactSelect
                placeholder="Не указано"
                options={[
                  { value: "Пользователь", label: "Пользователь" },
                  { value: "Администратор", label: "Администратор" },
                ]}
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
              />
            </Col>
            <Col md="2" className="mb-1">
              <Label className="form-label" for="name">
                Покупок
              </Label>
              <ReactSelect
                placeholder="Не указано"
                options={[
                  { value: "Пользователь", label: "Пользователь" },
                  { value: "Администратор", label: "Администратор" },
                ]}
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
              />
            </Col>
            <Col md="2" className="mb-1">
              <Label className="form-label" for="email">
                Потрачено
              </Label>
              <ReactSelect
                placeholder="Не указано"
                options={[
                  { value: "Активирован", label: "Активирован" },
                  { value: "Заблокирован", label: "Заблокирован" },
                ]}
                className="react-select"
                classNamePrefix="select"
                theme={selectThemeColors}
              />
            </Col>

            <Col></Col>
          </Row>
        </CardBody>
        <div className="react-dataTable">
          <DataTable
            noHeader
            pagination
            noDataComponent={
              <EmptyMessage />
            }
            columns={advSearchColumns}
            paginationPerPage={7}
            className="react-dataTable"
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}

            // data={dataToRender()}
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default UsersTable;
