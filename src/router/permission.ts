import router from '@/router'
// import store from '@/store'

router.beforeEach(async (_to: any, _from: any, next) => {
  // const hasToken = store.state.user.token
  // if (hasToken) {
  //   next()
  // } else {
  //   try {
  //     ///
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  next()
})

router.afterEach(() => {})
