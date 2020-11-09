$(() => {
    const input = 'input[name="ichimatsu[]"]';
    const Breathing = 'Breathing';
    const Sunshine = 'Sunshine';
    const Pillar = 'Pillar';
    const $Weakpoint = $(`#Weakpoint`);
    const $Pillar = $(`#${Pillar}`);
    // initialize
    if (!$(input).prop('checked')) {
        $Weakpoint.attr('readonly', 'readonly');
        $Pillar.attr('readonly', 'readonly');
    }
    // click event
    $(input).on('change', function () {
        if ($(this).prop('checked')) {
            const checkedVal = $(this).val();
            if (checkedVal === Breathing || checkedVal === Sunshine) {
                $Weakpoint.removeAttr('readonly');
                $Weakpoint.trigger('focus');
            }
            else if (checkedVal === 'Pillar') {
                $Pillar.removeAttr('readonly');
                $Pillar.trigger('focus');
            }
        }
        else {
            const checks = $(`${input}:checked`).map( function () {
                return $(this).val();
            }).get();
            if (!checks.includes('Breathing') && !checks.includes('Sunshine')) {
                $Weakpoint.attr('readonly', 'readonly');
                $Weakpoint.trigger('blur');
            }
            if (!checks.includes('Pillar')) {
                $Pillar.attr('readonly', 'readonly');
                $Pillar.trigger('blur');
            }
        }
    });
});
