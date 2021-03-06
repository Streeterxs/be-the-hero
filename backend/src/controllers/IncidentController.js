const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const countFull = await connection('incidents').count();
        console.log('CountFull: ', countFull);

        const [count] = await connection('incidents').count();
        console.log('Count: ', count);

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('Access-Control-Expose-Headers', 'X-Total-Count');
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        console.log(request.headers);

        const [id] = await connection('incidents').insert(
            {
                title,
                description,
                value,
                ong_id
            }
        );
        return response.json({id});
    },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        console.log(incident);
        if (incident.ong_id !== ong_id) {
            response.status(401).json({error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        response.status(204).send();
    }
}