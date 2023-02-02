function commandProcessor() {
    let text = '';

    function append(string) {
        return text += string;
    }

    function removeStart(n) {
        return text = text.slice(n);
    }

    function removeEnd(n) {
        return text = text.slice(0, text.length - n);
    }

    function print() {
        console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }
}

let test = commandProcessor();
test.append('hello');
test.append('again');
test.removeStart(3);
test.removeEnd(4)
test.print();