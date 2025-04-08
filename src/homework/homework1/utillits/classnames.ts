export const classnames = (arg1: string[], arg2: Record<string, boolean | undefined>)=>{

    const argCopy = [...arg1]
    // console.log(argCopy.join(" "))
    console.log('////////////////')
    for (const key in arg2){
        console.log('key', key, 'value', arg2[key])
        if (arg2[key] === true){
            argCopy.push(key)
        }
    }

    return argCopy.join(' ');
}