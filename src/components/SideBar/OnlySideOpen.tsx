"use client";

import { useDashboardContext } from "@/context/DashboardContext";
import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Cookies from "js-cookie";
import logoCreditoYa from "@/assets/only_object_logo.png";

import {
  TbMoneybag,
  TbUserSearch,
  TbX,
  TbMobiledata,
  TbTool,
} from "react-icons/tb";

import Avatar from "react-avatar";
import { useGlobalContext } from "@/context/Session";
import { OptionDash } from "@/types/session";
import { FiLogOut } from "react-icons/fi";

function OnlySideOpen({ chageSide }: { chageSide: (status: boolean) => void }) {
  const { option, setOption } = useDashboardContext();

  const { dataSession } = useGlobalContext();

  const handleChangeOption = ({ option }: { option: OptionDash }) => {
    setOption(option);
    chageSide(false);
  };

  const handleLogout = () => {
    Cookies.remove("SessionData");
    Cookies.remove("optionDash");
    window.location.href = "/";
  };

  return (
    <>
      <div className={styles.sideBarSupra}>
        <div className={styles.listOptions}>
          <div className={styles.logoAndBtn}>
            <div className={styles.logoSide}>
              <Image className={styles.logo} src={logoCreditoYa} alt="logo" />
            </div>

            <div className={styles.BtnClose} onClick={() => chageSide(false)}>
              <TbX className={styles.iconMenu} size={20} />
            </div>
          </div>

          <div className={styles.btnOption}>
            <div
              className={
                option == "Request"
                  ? styles.btnOpenOptSelect
                  : styles.btnOpenOpt
              }
              onClick={() => handleChangeOption({ option: "Request" })}
            >
              <div className={styles.subBtnOptionOpen}>
                <TbMobiledata
                  className={
                    option == "Request"
                      ? styles.iconOptionSelect
                      : styles.iconOption
                  }
                  size={18}
                />
              </div>
              <p className={styles.messageBtn}>Solicitudes</p>
            </div>

            <div
              className={
                option == "Accepts"
                  ? styles.btnOpenOptSelect
                  : styles.btnOpenOpt
              }
              onClick={() => handleChangeOption({ option: "Accepts" })}
            >
              <div className={styles.subBtnOptionOpen}>
                <TbMoneybag
                  className={
                    option == "Accepts"
                      ? styles.iconOptionSelect
                      : styles.iconOption
                  }
                  size={18}
                />
              </div>
              <p className={styles.messageBtn}>Prestamos</p>
            </div>

            <div
              className={
                option == "Clients"
                  ? styles.btnOpenOptSelect
                  : styles.btnOpenOpt
              }
              onClick={() => handleChangeOption({ option: "Clients" })}
            >
              <div className={styles.subBtnOptionOpen}>
                <TbUserSearch
                  className={
                    option == "Clients"
                      ? styles.iconOptionSelect
                      : styles.iconOption
                  }
                  size={18}
                />
              </div>
              <p className={styles.messageBtn}>Clientes</p>
            </div>

            <div
              className={
                option == "Emails" ? styles.btnOpenOptSelect : styles.btnOpenOpt
              }
              onClick={() => handleChangeOption({ option: "Emails" })}
            >
              <div className={styles.subBtnOptionOpen}>
                <TbTool
                  className={
                    option == "Emails"
                      ? styles.iconOptionSelect
                      : styles.iconOption
                  }
                  size={18}
                />
              </div>
              <p className={styles.messageBtn}>Herramientas</p>
            </div>
          </div>
        </div>

        <div className={styles.boxUser}>
          <div className={styles.containerCellExit}>
            <div
              className={styles.btnOpenOpt}
              onClick={() => handleChangeOption({ option: "User" })}
            >
              <div className={styles.subBtnOptionOpen}>
                <Avatar
                  src={dataSession?.avatar}
                  className={styles.avatarUser}
                  size="25px"
                  round={true}
                />
              </div>
              <div className={styles.detailUser}>
                <div className={styles.centerDetailUser}>
                  <p className={styles.messageBtn}>
                    {dataSession?.name} {dataSession?.lastNames.split(" ")[0]}
                  </p>
                  <p className={styles.rolUser}>
                    {dataSession?.rol == "admin" ? "Administrador" : "Asesor"}
                  </p>
                </div>
              </div>
              {/* <div className={styles.threePoints}>
                  <TbLineDashed className={styles.iconThreePoint} size={20} />
                </div> */}
            </div>

            <div className={styles.btnCellExit} onClick={handleLogout}>
              <p>Cerrar Session</p>
              <div className={styles.btnCellBoxIcon}>
                <FiLogOut size={20} className={styles.iconExit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlySideOpen;
