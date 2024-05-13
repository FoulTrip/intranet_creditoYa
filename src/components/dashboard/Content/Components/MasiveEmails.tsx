import FilterBox from "@/components/Email/FilterBox";
import React, { useCallback, useState } from "react";
import styles from "../styles/masiveEmails.module.css";
import { JsonExcelConvert } from "@/types/ExcelFile";
import axios from "axios";
import { toast } from "sonner";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import HeaderContent from "./HeaderContent";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

function MasiveEmails() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jsonFile, setJsonFile] = useState<JsonExcelConvert[] | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      // Comprueba si el archivo es un libro de Excel
      if (
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel"
      ) {
        setSelectedFile(file);
      } else {
        console.log("El archivo no es un libro de Excel");
      }
    });
  }, []);

  const processFile = async () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        let formData = new FormData();
        formData.append("workbook", selectedFile);

        // console.log(formData.get("workbook"));
        // console.log(selectedFile);

        try {
          const response = await axios.post(
            "/api/handler/exceltojson",
            formData
          );

          // console.log(response.data);

          if (response.data.success == false) {
            throw new Error("Error al procesar archivo");
          }

          const jsonResponse: JsonExcelConvert[] = await response.data.data;
          // console.log(jsonResponse);
          setJsonFile(jsonResponse);
        } catch (error) {
          if (error instanceof Error) {
            // console.log(error);
            toast.error(error.message);
          }
        }
      };

      reader.readAsArrayBuffer(selectedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className={styles.mainMail}>

        <div
          {...getRootProps()}
          className={
            !selectedFile ? styles.containerDropNo : styles.containerDrop
          }
        >
          <input {...getInputProps()} />

          {selectedFile ? (
            <>
              <div className={styles.NameFile}>
                <div className={styles.iconNameFile}>
                  <PiMicrosoftExcelLogoDuotone size={44} />
                </div>
                <p>{selectedFile.name}</p>
              </div>
              <p className={styles.bytesFile}>
                Tamaño: {selectedFile.size} bytes
              </p>
            </>
          ) : (
            <div className={styles.boxMessage}>
              <div className={styles.boxIconFile}>
                <FiUpload className={styles.iconLoadFile} size={30} />
              </div>
              <p>Arrastra y suelta el documento de Excel</p>
            </div>
          )}
        </div>

        {!jsonFile && (
          <div className={styles.boxBtnProc}>
            <button
              disabled={selectedFile ? false : true}
              onClick={processFile}
            >
              Procesar
            </button>
          </div>
        )}
      </div>

      {jsonFile && (
        <>
          <div className={styles.containerFilter}>
            <FilterBox JsonFile={jsonFile} />
          </div>
        </>
      )}
    </>
  );
}

export default MasiveEmails;
