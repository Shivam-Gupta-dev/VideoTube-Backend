import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import { ApiError } from "./ApiError.js";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            // console.log("Local File don't exist")
            return null
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

// Assuming ApiError is a custom error class defined elsewhere
const deleteOnCloudinary = async (publicId) => {
    if (!publicId) {
        throw new ApiError(400, "Cloudinary public ID is required");
    }

    try {
        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: "auto",
        });

        if (result.result !== 'ok' && result.result !== 'not found') {
            throw new ApiError(500, "Error while deleting the file from Cloudinary");
        }

        console.log("File deleted or not found on Cloudinary:", result);
        return result;

    } catch (error) {
        console.error("Error in deleteOnCloudinary:", error);
        throw new ApiError(500, error.message || "Server error during file deletion");
    }
};



export { uploadOnCloudinary, deleteOnCloudinary }