import { JsonExcelConvert } from "@/types/ExcelFile";
import React, { useEffect } from "react";
import styles from "./styles/verify.module.css";
import { TbX } from "react-icons/tb";
import socket from "@/app/socket";
import { toast } from "sonner";

function VerifySend({
  sessionId,
  perfils,
  emails,
  phones,
  names,
}: {
  perfils: JsonExcelConvert[];
  emails: JsonExcelConvert[] | string[];
  phones: JsonExcelConvert[] | string[];
  names: JsonExcelConvert[] | string[];
  sessionId: string;
}) {
  useEffect(() => {
    if (!socket) return;

    socket.on("[whatsapp]sendVerifyPhones", (data) => {
      toast.success(data.message);
    });

    socket.emit("connected", "Conect to verify component");

    return () => {
      socket?.off("[whatsapp]sendVerifyPhones");
    };
  }, []);

  const handleSendMessages = () => {
    if (!socket) {
      throw new Error("Socket no required!");
    }

    if (!phones) throw new Error("No phones");
    console.log(phones);

    const data = {
      sessionId,
      phones,
    };

    socket.emit("[whatsapp_client]entryNumbersPhone", data);
  };

  return (
    <>
      <h2 className={styles.titleModel}>Destinatarios:</h2>
      <div className={styles.containerDst}>
        {perfils.map((user) => (
          <div className={styles.boxUser} key={user.id}>
            <div className={styles.prevInfo}>
              <div className={styles.subBoxUser}>
                <h5 className={styles.label}>Email</h5>
                <p className={styles.text}>{user.correo_electronico}</p>
                <p className={styles.text}>{user.telefono}</p>
                <p className={styles.text}>{user.nombre}</p>
              </div>
            </div>

            <div className={styles.boxDelete}>
              <TbX className={styles.iconDelete} size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.boxSend}>
        <p className={styles.btnSend} onClick={handleSendMessages}>
          Enviar
        </p>
      </div>
    </>
  );
}

export default VerifySend;
