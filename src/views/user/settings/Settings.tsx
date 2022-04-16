import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import s from "../../../styles/Settings.module.css";
import { User, Home } from "ts-react-feather-icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./Navbar";

import Social from "./Social";
import Security from "./Security";
import Common from "./Common";
import Billing from "./Billing";
import Notifications from "./Notifications";
import { Breadcrumbs } from "./Breadcrumbs";

const Settings: React.FC = ({}): JSX.Element => {
	const [active, setActive] = useState("1");

	const toggle = (tab) => {
		setActive(tab);
	};

	return (
		<>
			<Row>
				<Col>
					<Router>
						<Switch>
							<Route path="/user/settings/socials">
								<Breadcrumbs />
								<Navbar />
								<Social />
							</Route>
							<Route path="/user/settings/billing">
								<Breadcrumbs />
								<Navbar />
								<Billing />
							</Route>
							<Route path="/user/settings/security">
								<Breadcrumbs />
								<Navbar />
								<Security />
							</Route>
							<Route path="/user/settings/notifications">
								<Breadcrumbs />
								<Navbar />
								<Notifications />
							</Route>
							<Route path="/user/settings/">
								<Breadcrumbs />
								<Navbar />
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
