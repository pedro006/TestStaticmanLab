function getdata(event) {
    document.querySelectorAll('[datainput]').forEach((el, i) => {
        var attr = el.getAttribute('datainput')
        var type = el.getAttribute('type')
        if (type === 'checkbox') {
            if (el.checked === true) {
                document.querySelector('[datatarget="' + attr + '"]').value = 'on';
            } else {
                document.querySelector('[datatarget="' + attr + '"]').value = 'off';
            }
        } else {
            document.querySelector('[datatarget="' + attr + '"]').value = el.innerHTML;
        }

    })
}