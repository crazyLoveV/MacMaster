

class auth_controller {

    async registration(req, res) {

        try {
            
        } catch (error) {
            return res.json({
                result: '0',
                success: false,
                massage: 'You have an error in code!',
                error: error
            })
        }
        
    }

    async login(req, res) {

        try {
            
        } catch (error) {
            return res.json({
                result: '0',
                success: false,
                massage: 'You have an error in code!',
                error: error
            })
        }
        
    }

    async getUsers(req, res) {

        try {
            res.json({
                result: '1',
                success: true,
                massage: 'Server is working!'
            })
            
        } catch (error) {
            return res.json({
                result: '0',
                success: false,
                massage: 'You have an error in code!',
                error: error
            })
        }
        
    }

}

module.exports = auth_controller