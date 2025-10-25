import { httpClient } from "../configs/AxiosHelper";



export const createRoomApi = async (roomDetails) => {

    const response = await httpClient.post(`/room/add-room`, roomDetails);
    return response.data;
}


export const joinRoomApi = async (roomId) => {
    const response = await httpClient.get(`/room/get-room/${roomId}`, roomId);
    return response.data;
}


export const getMessageApi = async (roomId) => {
    const response = await httpClient.get(`/room/get-room/${roomId}`);
    return response.data.data.messages;
}


export const  uploadFileApi = async  (formData) => {
     const response =  await httpClient.post('/attachments/upload',formData);
    return response;
}

export const downloadFileApi = async (id,name) => {
    const response = await httpClient.get(`/attachments/${id}/download`, {
        responseType: 'blob', // important for binary data
        headers: {
          'Authorization': 'Basic ' + btoa('priyam:priyam'),
        },
      })
        .then((response) => {
          const blob = new Blob([response.data]);
          const downloadUrl = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = name || '';
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(downloadUrl); // cleanup
        })
        .catch(() => toast.error('Download failed'));
}