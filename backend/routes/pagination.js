function pagination(model) {
    return async (req, res, next) => {
        var page = Number(req.query.page)
        const limit = Number(req.query.limit)
        const user = req.query.op
        const filter = req.query.filter
        const sort = req.query.sort

        var startIndex = (page - 1) * limit
        const endIndex = page.limit
        const results = {}

        if (endIndex < (await model.countDocuments().exec())) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            }
        }

        if (user) {
            console.log(user)
            if (filter && sort) {
                console.log(filter,sort)
                results.current = await model.find({op_id: user,type:filter}).sort({capacity:sort}).limit(limit).skip(startIndex).exec()
                while (results.current.length == 0) {
                    page--
                    startIndex = (page - 1) * limit
                    if (startIndex < 0) {
                        startIndex = 0
                        break
                    }
                    results.current = await model.find({op_id: user,type:filter}).sort({capacity:sort}).limit(limit).skip(startIndex).exec()
                }

                results.maxlength = await model.countDocuments({ op_id: user,type:filter }).exec()

                try {
                    results.current = await model.find({op_id: user,type:filter}).sort({capacity:sort}).limit(limit).skip(startIndex).exec()
                    res.json(results)
                    next()
                }
                catch (err) {
                    res.status(500).json({ message: err.message })
                }
            }

            else if(sort) {
                console.log(sort)
                results.current = await model.find({op_id: user}).sort({capacity:sort}).limit(limit).skip(startIndex).exec()
                while (results.current.length == 0) {
                    page--
                    startIndex = (page - 1) * limit
                    if (startIndex < 0) {
                        startIndex = 0
                        break
                    }
                    results.current = await model.find({op_id: user}).sort({capacity:sort}).limit(limit).skip(startIndex).exec()
                }

                results.maxlength = await model.countDocuments({ op_id: user }).exec()

                try {
                    results.current = await model.find({op_id: user}).sort({capacity:sort}).limit(limit).skip(startIndex).exec()
                    res.json(results)
                    next()
                }
                catch (err) {
                    res.status(500).json({ message: err.message })
                }
            }

            else if(filter) {
                console.log(filter)
                results.current = await model.find({op_id: user,type:filter}).limit(limit).skip(startIndex).exec()
                while (results.current.length == 0) {
                    page--
                    startIndex = (page - 1) * limit
                    if (startIndex < 0) {
                        startIndex = 0
                        break
                    }
                    results.current = await model.find({op_id: user,type:filter}).limit(limit).skip(startIndex).exec()
                }

                results.maxlength = await model.countDocuments({ op_id: user,type:filter }).exec()

                try {
                    results.current = await model.find({op_id: user,type:filter}).limit(limit).skip(startIndex).exec()
                    res.json(results)
                    next()
                }
                catch (err) {
                    res.status(500).json({ message: err.message })
                }
            }

            else {                
                results.current = await model.find({ op_id: user }).limit(limit).skip(startIndex).exec()
                while (results.current.length == 0) {
                    page--
                    startIndex = (page - 1) * limit
                    if (startIndex < 0) {
                        startIndex = 0
                        break
                    }
                    results.current = await model.find({ op_id: user }).limit(limit).skip(startIndex).exec()
                }

                results.maxlength = await model.countDocuments({ op_id: user }).exec()

                try {
                    results.current = await model.find({ op_id: user }).limit(limit).skip(startIndex).exec()
                    res.json(results)
                    next()
                }
                catch (err) {
                    res.status(500).json({ message: err.message })
                }
            }
        }

        else {
            results.current = await model.find().limit(limit).skip(startIndex).exec()
            while (results.current.length == 0) {
                page--
                startIndex = (page - 1) * limit
                results.current = await model.find().limit(limit).skip(startIndex).exec()
            }

            results.maxlength = await model.countDocuments().exec()

            try {
                results.current = await model.find().limit(limit).skip(startIndex).exec()
                res.json(results)
                next()
            }
            catch (err) {
                res.status(500).json({ message: err.message })
            }
        }
    }
}

module.exports = pagination