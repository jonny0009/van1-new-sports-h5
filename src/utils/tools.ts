
export function getAssetsImage(file: string, dir?: string) {
  const modules = import.meta.globEager('../assets/images/**/*')
  const dirPath = dir ? `../assets/images/${dir}/` : '../assets/images/'
  return modules[dirPath + file].default;
}