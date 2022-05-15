// ** Reactstrap Imports\
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";

// ** Chrome Logo
import chromeLogo from "../../../assets/images/icons/google-chrome.png";

const recentDevicesArr = [
  {
    device: "Dell XPS 15",
    location: "United States",
    browser: "Chrome on Windows",
    activity: "10, Jan 2021 20:07",
  },
  {
    location: "Ghana",
    device: "Google Pixel 3a",
    browser: "Chrome on Android",
    activity: "11, Jan 2021 10:16",
  },
  {
    location: "Mayotte",
    device: "Apple iMac",
    browser: "Chrome on MacOS",
    activity: "11, Jan 2021 12:10",
  },
  {
    location: "Mauritania",
    device: "Apple iPhone XR",
    browser: "Chrome on iPhone",
    activity: "12, Jan 2021 8:29",
  },
];

const AdminRecentDevices = () => {
  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">Последние сессии</CardTitle>
      </CardHeader>
      <div className="">
        <Table className="text-nowrap text-center" responsive bordered>
          <thead>
            <tr>
              <th className="text-start">Браузер</th>
              <th>Последняя активность</th>
            </tr>
          </thead>
          <tbody>
            {recentDevicesArr.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-start">
                    <img
                      className="me-75"
                      src={chromeLogo}
                      alt={item.device}
                      width="20"
                      height="20"
                    />
                    <span className="fw-bolder">{item.browser}</span>
                  </td>
                  <td>{item.activity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default AdminRecentDevices;
