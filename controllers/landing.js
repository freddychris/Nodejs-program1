const models = require('../models')


exports.get_landing = function(req, res, next) {
  console.log('It comes here 1')
    res.render('landing', { title: 'Express' });
  }

exports.submit_lead = function(req, res, next) {
   
return models.Lead.create({
  email: req.body.lead_email
}).then(lead => {
  res.redirect('/leads');
})
}

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll().then(leads =>{
    res.render('landing', { title: 'Express' , leads:leads });
  })
  
}

exports.show_lead = function(req, res, next) {
    return models.Lead.findOne({
        where: {
           id : req.params.lead_id
   }
 }).then (lead => {
   res.render('lead',{ lead : lead });
 });
}

exports.show_edit_leads = function(req, res, next) {
  console.log('Comes to point2')
  return models.Lead.findOne({
      where: {
         id : req.params.lead_id
 }
}).then (lead => {
 res.render('lead/edit_lead',{ lead : lead });
});
}

exports.edit_leads = function(req, res, next) {
   
    return models.Lead.update({
        email: req.body.lead_email
    },{
      where: {
        id: req.params.lead_id
      }
    }).then(result => {
      res.redirect('/leads/'+ req.params.lead_id);
    })
  }  

  exports.delete_leads = function(req, res, next) {
    
    return models.Lead.destroy({
      where: {
        id: req.params.lead_id
      }
    }).then(result => {
      res.redirect('/leads');
    })
  }


  exports.delete_leads_json = function(req, res, next) {
  
    return models.Lead.destroy({
      where: {
        id: req.params.lead_id
      }
    }).then(result => {
      res.send({msg: "Success"});
    })
  }