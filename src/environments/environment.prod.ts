export const environment = {
  production: true,
  APP_CONFIG : {
    product : {
      get : {
        url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/productlist'
      },
      create: {
        url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/productcreate'
      },
      update: {
        url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/productupdate'
      },
      delete: {
        url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/productdelete'
      }
    }
  }
};
