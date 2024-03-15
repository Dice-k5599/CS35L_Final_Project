import React, { useState } from "react";
import { db, auth, storage} from "../../../config/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '@headlessui/react'
import { doc, updateDoc, getDoc } from "firebase/firestore";



function FileUploadButton(){

    const [fileUpload, setFileUpload] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const uploadFile = async () => {
        const userDocumentRef = doc(db, "students", auth.currentUser.uid); 
        const filesFolderRef = ref(storage, `userTranscripts/${auth.currentUser.uid}/${fileUpload.name}`);    
        
        try {
            await uploadBytes(filesFolderRef, fileUpload);
            const url = await getDownloadURL(filesFolderRef);
            setUploadSuccess(true);
            await updateDoc(userDocumentRef, {
                fileurl: url
            });
        } catch(error) {
            console.error(error);
            setUploadSuccess(false);
        }
    };

    const downloadFile = async () => {
        try {
            const docRef = doc(db, "students", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const data = docSnap.data();
                const fileUrl = data.fileurl;
                if (fileUrl) {
                    window.open(fileUrl, "_blank");
                } else {
                    //Default fileURL is null
                    console.log("No file URL found");
                }
            } else {
                console.log("No document found");
            }
        } catch (error) {
            console.error("Error fetching document:", error);
        }
    };

    return (
        <div className="mr-32 ml-10 flex flex-wrap">
            <div>
                <p className="f2 b bg-white">
                    Upload Transcript
                </p>
                <p className="f5">
                    Want to keep track of your transcipt files? You could upload them into an online storage file. Download your most recent transcipt with the download button. (Max 1 file per upload)
                </p> 
            </div>
            <div className="">
                <label className="m-2 w-64 h-32 flex flex-col justify-center items-center px-4 py-6 rounded-md border-2 border-ucla-blue bg-state-50 text-md font-medium text-ucla-blue hover:text-white hover:bg-ucla-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 active:bg-blue-600 transition duration-150 ease-in-out hover:scale-110">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">Select a file</span>
                        <input type='file' className="hidden" 
                            onChange={(e) => {
                                setFileUpload(e.target.files[0]);
                            }}
                        />
                </label>
                <div className="f5 text-ucla-blue flex justify-center">
                    {(fileUpload)? fileUpload.name : ''}
                </div>
            </div>
            <div className="ml-6 flex items-center">
                <div className="">
                    <button className="white w-16 h-6 shrink-0 rounded-md border-1 border-black bg-gray flex justify-center items-center text-md font-medium hover:text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 active:bg-blue-600 transition duration-150 ease-in-out hover:scale-110" onClick={uploadFile}>Upload</button>
                    <p>
                        {(uploadSuccess)? <p className="f6 green">file upload success</p> : ""}
                    </p>
                    <button className="white w-32 h-6 shrink-0 rounded-md border-1 border-black bg-gray flex justify-center items-center text-md font-medium hover:text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 active:bg-blue-600 transition duration-150 ease-in-out hover:scale-110" onClick={downloadFile}>Download</button>
                </div>
            </div>
        </div>
    );
}

export default FileUploadButton;