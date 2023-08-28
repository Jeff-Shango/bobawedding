
try {
    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;

    const getCommentsQuery = `SELECT comments, commentator FROM boba_wedding.${tableName}`;

    return {
        statusCode: 200,
        body: JSON.stringify(rows),
    };
} finally {
    db.end();
}

