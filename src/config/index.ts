const isDev: any = import.meta.env.DEV

if (isDev) {
  // console.log('dev')
}

export const ImageSource = window.AIConfig.static_url
export const ChatSource = window.AIConfig.push_url
