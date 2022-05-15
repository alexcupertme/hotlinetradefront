import React from "react";
import { Col, Row } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserSettingsNavbar } from "../../../components/UserSettingsNavbar";

import Social from "./settings/Social";
import Security from "./settings/Security";
import Common from "./settings/Common";

const Settings: React.FC = ({}): JSX.Element => {
	return (
		<>
			<Row>
				<Col>
					<Router>
						<Switch>
							<Route path="/user/settings/socials">
								<UserSettingsNavbar curState="3"/>
								<Social />
							</Route>
							<Route path="/user/settings/security">
								<UserSettingsNavbar curState="2"/>
								<Security />
							</Route>
							<Route path="/user/settings/">
								<UserSettingsNavbar curState="1"/>
								<Common />
							</Route>
						</Switch>
					</Router>
				</Col>
			</Row>
		</>
	);
};

export default Settings;
