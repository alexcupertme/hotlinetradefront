import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Nav, NavItem, NavLink } from "reactstrap";

import {
  User,
  Home,
  Codepen,
  Grid,
  Map,
  Users,
  Server,
  Link2,
  Tag,
  Send,
  Percent,
  Code,
  Sliders,
  Feather,
  ArrowRight,
  ArrowLeft,
  DollarSign,
} from "ts-react-feather-icons";

import { Link } from "react-router-dom";

import s from "../@core/scss/base/nav.module.css";

type TProps = {
  curState: string;
};

export const UserStoreNav: React.FC<TProps> = ({ curState }): JSX.Element => {
  const [active, setActive] = useState(curState);

  let [curTranslate, setCurTranslate] = useState(0);
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(true);

  const links = useRef(null);

  const toggle = (tab) => {
    setActive(tab);
  };

  const navHandlerRight = () => {
    if (
      Math.abs(curTranslate) <=
      links.current.offsetWidth - (links.current.offsetWidth / 5) * 3
    ) {
      setCurTranslate((curTranslate -= links.current.offsetWidth / 6));
      setLeftArrowActive(true);
    } else {
      setRightArrowActive(false);
      setLeftArrowActive(true);
    }
    if (
      Math.abs(curTranslate) >=
      links.current.offsetWidth - (links.current.offsetWidth / 6) * 2
    ) {
      setRightArrowActive(false);
    }
  };

  const navHandlerLeft = () => {
    if (
      curTranslate + links.current.offsetWidth / 6 <=
      -(links.current.offsetWidth / 6)
    ) {
      setLeftArrowActive(false);
    }
    if (curTranslate <= -(links.current.offsetWidth / 6)) {
      setCurTranslate((curTranslate += links.current.offsetWidth / 6));
      setRightArrowActive(true);
      setLeftArrowActive(true);
    } else {
      setRightArrowActive(true);
      setLeftArrowActive(false);
    }
  };

  return (
    <Row className="mb-2">
      <Col className="d-flex align-items-center">
        <div
          className={
            leftArrowActive ? `${s.slide_left}  ${s.active}` : `${s.slide_left}`
          }
          onClick={navHandlerLeft}
        >
          <ArrowLeft />
        </div>
        <Nav
          pills
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            minWidth: "85%",
            width: "90%",
            margin: "auto 0",
            overflow: "hidden",
          }}
        >
          <div
            className={s.links_wrapper}
            ref={links}
            style={{
              transform: `translateX(${curTranslate}px)`,
              transition: ".4s",
            }}
          >
            <NavItem className={s.nav_item}>
              <NavLink
                className={s.nav_link}
                tag={Link}
                to="/store/main"
                active={active === "1"}
                onClick={() => {
                  toggle("1");
                }}
              >
                <Codepen size={16} />
                <span>Информация</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/category"
                active={active === "4"}
                onClick={() => {
                  toggle("4");
                }}
              >
                <Grid size={16} />
                <span>Категории</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/analytics"
                active={active === "5"}
                onClick={() => {
                  toggle("5");
                }}
              >
                <Map size={16} />
                <span>Статистика</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/staff"
                active={active === "6"}
                onClick={() => {
                  toggle("6");
                }}
              >
                <Users size={16} />
                <span>Сотрудники</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/servers"
                active={active === "7"}
                onClick={() => {
                  toggle("7");
                }}
              >
                <Server size={16} />
                <span>Сервера</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/links"
                active={active === "8"}
                onClick={() => {
                  toggle("8");
                }}
              >
                <Link2 size={16} />
                <span>Ссылки</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/promo"
                active={active === "9"}
                onClick={() => {
                  toggle("9");
                }}
              >
                <Tag size={16} />
                <span>Промо-коды</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/transactions"
                active={active === "10"}
                onClick={() => {
                  toggle("10");
                }}
              >
                <Send size={16} />
                <span>Перевод средств</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/users"
                active={active === "11"}
                onClick={() => {
                  toggle("11");
                }}
              >
                <Users size={16} />
                <span>Пользователи</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/sale"
                active={active === "12"}
                onClick={() => {
                  toggle("12");
                }}
              >
                <Percent size={16} />
                <span>Скидки</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/advanced"
                active={active === "13"}
                onClick={() => {
                  toggle("13");
                }}
              >
                <Code size={16} />
                <span>Продвинутые настройки</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/parameters"
                active={active === "14"}
                onClick={() => {
                  toggle("14");
                }}
              >
                <Sliders size={16} />
                <span>Параметры</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/appearance"
                active={active === "15"}
                onClick={() => {
                  toggle("15");
                }}
              >
                <Feather size={16} />
                <span>Внешний вид</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/store/payments"
                active={active === "16"}
                onClick={() => {
                  toggle("16");
                }}
              >
                <DollarSign size={16} />
                <span>Платежные системы</span>
              </NavLink>
            </NavItem>
          </div>
        </Nav>
        <div
          className={
            rightArrowActive
              ? `${s.slide_right}  ${s.active}`
              : `${s.slide_right}`
          }
          onClick={navHandlerRight}
        >
          <ArrowRight />
        </div>
      </Col>
    </Row>
  );
};
