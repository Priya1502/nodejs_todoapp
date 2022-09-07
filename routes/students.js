import  express  from 'express';

import  { createstudent, getstudents, getstudent, deletestudent, updatestudent } from '../controllers/students.js';

const router = express.Router();


let students = [] ;


router.get('/', getstudents); // get all students 

router.post('/', createstudent);//create new student

router.get('/:id', getstudent);

router.delete('/:id', deletestudent); 

router.patch('/:id', updatestudent);

export default router;


