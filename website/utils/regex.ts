function addAccents(input: string) {
    let retval = input;
    retval = retval.replace(/([ao])e/ig, "$1");
    retval = retval.replace(/e/ig, "[eèéêë]");
    retval = retval.replace(/c/ig, "[cç]");
    retval = retval.replace(/i/ig, "[iîï]");
    retval = retval.replace(/u/ig, "[uùûü]");
    retval = retval.replace(/y/ig, "[yÿ]");
    retval = retval.replace(/s/ig, "(ss|[sß])");
    retval = retval.replace(/a/ig, "([aàâä]|ae)");
    retval = retval.replace(/o/ig, "([oôö]|oe)");
    return retval;
}

function escapeRegExp(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function createTextSearchRegex(text: string) {
    return new RegExp(addAccents(escapeRegExp(text)), "gi");
}