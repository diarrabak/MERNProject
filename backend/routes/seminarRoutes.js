import {     //Import all our controllers
    addSeminar, 
    getSeminars,
    getSeminarById,
    updateSeminar,
    removeSeminar
} from '../controllers/seminarControllers.js';

const routes = (app) => {
	// Endpoint used on the server 
	//to get all seminars or to post and save a seminar 
    app.route('/seminars')
    // GET endpoint used on the server to get all seminars or to save a seminar 
    .get(getSeminars)

    // POST endpoint
        .post(addSeminar);
		
    // Endpoint used for getting a seminar, update a seminar or delete a seminar 
    app.route('/seminar/:SeminarId')
        // Get specific seminar
        .get(getSeminarById)

        // update a specific seminar
        .put(updateSeminar)

        // update a specific seminar
        .delete(removeSeminar);
}

export default routes;