"use client";

import { useDashboardContext } from "@/context/DashboardContext";
import React, { useState } from "react";
import styles from "./sidebar.module.css";
import logoCreditoYa from "@/assets/only_object_logo.png";

import {
  TbMenu2,
  TbMoneybag,
  TbUserSearch,
  TbX,
  TbMobiledata,
  TbTool,
  TbProgressX,
} from "react-icons/tb";

import Image from "next/image";
import Avatar from "react-avatar";
import { useGlobalContext } from "@/context/Session";
import { OptionDash } from "@/types/session";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";

function SideBar() {
  const { option, setOption } = useDashboardContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { dataSession } = useGlobalContext();

  const handleChangeOption = ({ option }: { option: OptionDash }) => {
    // console.log(option);
    setOption(option);
  };

  const handleLogout = () => {
    Cookies.remove("SessionData");
    Cookies.remove("optionDash");
    window.location.href = "/";
  };

  return (
    <>
      <div className={isOpen ? styles.sideBarOpen : styles.sideBar}>
        <div className={styles.listOptions}>
          <div className={isOpen ? styles.headerSide : styles.headerSideOpen}>
            {isOpen && (
              <div className={styles.logoSide}>
                <Image className={styles.logo} src={logoCreditoYa} alt="logo" />
              </div>
            )}
            <div
              className={isOpen ? styles.BtnClose : styles.BtnOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <TbX className={styles.iconMenu} size={20} />
              ) : (
                <TbMenu2 className={styles.iconMenu} size={20} />
              )}
            </div>
          </div>

          <div className={isOpen ? styles.btnOption : styles.btnOptionOpen}>
            {isOpen && (
              <>
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
                    option == "Emails"
                      ? styles.btnOpenOptSelect
                      : styles.btnOpenOpt
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

                <div
                  className={
                    option == "Issues"
                      ? styles.btnOpenOptSelect
                      : styles.btnOpenOpt
                  }
                  onClick={() => handleChangeOption({ option: "Issues" })}
                >
                  <div className={styles.subBtnOptionOpen}>
                    <TbProgressX
                      className={
                        option == "Issues"
                          ? styles.iconOptionSelect
                          : styles.iconOption
                      }
                      size={18}
                    />
                  </div>
                  <p className={styles.messageBtn}>FeedBacks</p>
                </div>
              </>
            )}

            {!isOpen && (
              <>
                <div
                  className={styles.containerSubBtnOpt}
                  onClick={() => handleChangeOption({ option: "Request" })}
                >
                  <div
                    className={
                      option == "Request"
                        ? styles.subBtnOptionSelect
                        : styles.subBtnOption
                    }
                  >
                    <TbMobiledata
                      className={
                        option == "Request"
                          ? styles.iconOptionSelect
                          : styles.iconOption
                      }
                      size={25}
                    />
                  </div>
                </div>

                <div
                  className={styles.containerSubBtnOpt}
                  onClick={() => handleChangeOption({ option: "Accepts" })}
                >
                  <div
                    className={
                      option == "Accepts"
                        ? styles.subBtnOptionSelect
                        : styles.subBtnOption
                    }
                  >
                    <TbMoneybag
                      className={
                        option == "Accepts"
                          ? styles.iconOptionSelect
                          : styles.iconOption
                      }
                      size={25}
                    />
                  </div>
                </div>

                <div
                  className={styles.containerSubBtnOpt}
                  onClick={() => handleChangeOption({ option: "Clients" })}
                >
                  <div
                    className={
                      option == "Clients"
                        ? styles.subBtnOptionSelect
                        : styles.subBtnOption
                    }
                  >
                    <TbUserSearch
                      className={
                        option == "Clients"
                          ? styles.iconOptionSelect
                          : styles.iconOption
                      }
                      size={25}
                    />
                  </div>
                </div>

                <div
                  className={styles.containerSubBtnOpt}
                  onClick={() => handleChangeOption({ option: "Emails" })}
                >
                  <div
                    className={
                      option == "Emails"
                        ? styles.subBtnOptionSelect
                        : styles.subBtnOption
                    }
                  >
                    <TbTool
                      className={
                        option == "Emails"
                          ? styles.iconOptionSelect
                          : styles.iconOption
                      }
                      size={25}
                    />
                  </div>
                </div>

                <div
                  className={styles.containerSubBtnOpt}
                  onClick={() => handleChangeOption({ option: "Issues" })}
                >
                  <div
                    className={
                      option == "Issues"
                        ? styles.subBtnOptionSelect
                        : styles.subBtnOption
                    }
                  >
                    <TbProgressX
                      className={
                        option == "Issues"
                          ? styles.iconOptionSelect
                          : styles.iconOption
                      }
                      size={25}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.boxUser}>
          {isOpen && (
            <>
              <div
                className={styles.btnOpenOpt}
                onClick={() => handleChangeOption({ option: "User" })}
              >
                <div className={styles.subBtnOptionOpen}>
                  <Avatar
                    src={dataSession?.avatar}
                    className={styles.avatarUser}
                    size="30px"
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
              </div>

              <div className={styles.btnCellExit} onClick={handleLogout}>
                <p>Cerrar Session</p>
                <div className={styles.btnCellBoxIcon}>
                  <FiLogOut size={20} className={styles.iconExit} />
                </div>
              </div>
            </>
          )}

          {!isOpen && (
            <>
              <div className={styles.barBtnsFinal}>
                <div
                  className={styles.containerSubBtnOpt}
                  onClick={() => handleChangeOption({ option: "User" })}
                >
                  <div className={styles.subBtnOption}>
                    <Avatar
                      src={dataSession?.avatar}
                      className={styles.avatarUser}
                      size="25px"
                      round={true}
                    />
                  </div>
                </div>
                <div className={styles.btnBoxExit} onClick={handleLogout}>
                  <FiLogOut size={20} className={styles.iconExit} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SideBar;
