export const classnames = (arg1: string[], arg2: Record<string, boolean | undefined>)=>{

    const argCopy = [...arg1]
    for (const key in arg2){
        if (arg2[key] === true){
            argCopy.push(key)
        }
    }

    return argCopy.join(' ');
}