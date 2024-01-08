import axios from "axios";

const dataUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=HWHlHHQY1uqHMZeZEAYoqJytg_Hlq6ngcS3C5MwNDW0tlhtZ_8XkeX1VFtkAz8iReTIFze6QznQTb5g5RdJmkf_Mq0Ynnzlem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI9APGQ61BGrxf0WoEJWPu0pn1HOj5dfHRfRbLmC2CbRzfqXjrEM_HwVKSk5k6K91KITNaDLuTy-21oAyuBxrUL9j8lJYsTTGzrSCZ144_ckf23vXPw2sfA&lib=MFjkoSLDuFXLcrfQoocfY_9mFulhg_8-J"

export function create_dataObjects_from_data(data){

  // 取出第一個元素，並且將其餘元素放入data （data比之前少一個元素）
  const keys = data.shift()

  // 功能：將data的每一個元素轉換成物件
  function create_data_object(value){
    const obj = Object()
    value.forEach((v,i)=>{
        obj[keys[i]] = v
    })
    return obj
  }

  // Array.map is to create a new array with the results of 
  // calling a function for every array element.
  const dataObjects = data.map((value)=>{
    return create_data_object(value)
  })
   
  return dataObjects
}

export async function fetchData() {
  try {
    const response = await axios.get(dataUrl);
    return create_dataObjects_from_data(response.data);
  } catch (error) {
    console.log(error);
  }
}

