const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = {'message': 'delayed success'}
      console.log(success)
    }, 500);

    const error = true
    if(!error){
      resolve()
    }else{
      reject()
    }
  })
}


const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = {'message': 'delayed exception'}
      console.error(error)
    }, 500);

    const error = true
    if(!error){
      reject()
    }else{
      resolve()
    }
  })
}

resolvedPromise()
rejectedPromise().catch((error) => {
  console.log(error)
})