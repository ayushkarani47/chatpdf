'use client'
import { Inbox } from 'lucide-react'
import React from 'react'
import {useDropzone} from 'react-dropzone' 

type Props = {}

const FileUpload = () => {
  const {getRootProps,getInputProps}=useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
   // maxSize: 10 * 1024 * 1024, // 10 MB
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
    // onDropRejected: (rejectedFiles) => {
    //   console.log(rejectedFiles);
    // },
  })
  return <div className='p-2 bg-white rounded-xl'>
    <div {...getRootProps({className:'border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 justify-center items-center flex flex-col'})}>
      <input {...getInputProps()} />
      <Inbox className='h-10 w-10 text-blue-500' />
      <p className='mt-2 text-sm text-slate-400'>Drop PDF here</p>
    </div>
  </div>;
}

export default FileUpload