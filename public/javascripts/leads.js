function deleteLead(leadId){
    $.ajax({
        url: '/lead' + leadId + '/delete-json',
        contentType: 'application/json; charset'
    })
}