var express = require('express');
var router = express.Router();
let landing= require('../controllers/landing')


router.get('/',landing.get_landing); 
router.post('/',landing.submit_lead);
router.get('/leads',landing.show_leads); 
router.get('/leads/:lead_id',landing.show_lead); 
router.get('/leads/:lead_id/edit',landing.show_edit_leads); 
router.post('/leads/:lead_id/edit',landing.edit_leads);
router.post('/leads/:lead_id/delete', landing.delete_leads);
router.post('/leads/:lead_id/delete-json', landing.delete_leads_json);
module.exports = router;
