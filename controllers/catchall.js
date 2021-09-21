exports.catchall = async(req, res, next) => {
	try {
		await res.status(404).json({
			status: "error",
			data: {message: "uh-oh.  This looks like a bad request."},
		});
		client.close();
	} catch (err){
		await res.status(500).json({
			status: "error",
			data: { message: err.message },
			query: req.query,
			params: req.params,
		});
		client.close();
	}
}