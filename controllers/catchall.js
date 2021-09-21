exports.catchall = async(req, res, next) => {
	try {
		await res.status(203).json({
			status: "success",
			data: undefined,
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