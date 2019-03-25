const delay = (duration) =>
  new Promise(resolve => setTimeout(resolve, duration))

async function asyncWithAwait(prefix) {
  console.log(prefix + ' before await')
  await delay(1000)
  console.log(prefix + ' after await')
}

function asyncWithPromise(prefix) {
  console.log(prefix + ' before promise')
  return delay(1000)
  .then(_ => console.log(prefix + ' after promise'))
}

async function run() {
   let prefix = '(2)'
   console.log(prefix + ' with await')
   await asyncWithAwait(prefix)
   console.log(prefix + ' with promise')
   asyncWithPromise(prefix).then(_ => console.log(prefix + ' after all'))
 }
 
 run()