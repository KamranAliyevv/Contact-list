export const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span:5,
      },
      md: {
        span: 2,
      },
    },
    wrapperCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 16,
      },
    },
  };
 export const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  export const isDirty=(prevData,data)=>{
    let newData={};
    let isDirty=false;
    const keys=Object.keys(prevData)
    Object.values(prevData).forEach((item,index)=>{
      if(item!==Object.values(data)[index]){
        newData[keys[index]]=Object.values(data)[index];
        isDirty=true;
      }
      else{
        newData[keys[index]]=item;
      }
    })
    if(isDirty){
      return newData;
    }
    else{
      return isDirty;
    }
  }