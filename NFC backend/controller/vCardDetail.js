import VCardDetailDB from "../model/vCardDetailModel.js";

export async function createVCardDetail(req, res, next) {
    try {
        const data = req.body;
        console.log(req, "data")
        const details = {
            // vCardForm: {
            urlAlias: data.urlAlias,
            vCardName: data.vCardName,
            occupation: data.occupation,
            description: data.description,
            // },
            // vCardDetails: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            alternateEmail: data.alternateEmail,
            location: data.location,
            locationURL: data.locationURL,
            dob: data.dob,
            company: data.company,
            defaultLanguage: data.defaultLanguage
            // }
        };
        const createVCardDetail = await VCardDetailDB.create(details);
        console.log(createVCardDetail, 'sdf')
        res.status(201).json({
            message: "Created Successfully",
            data: createVCardDetail,
        });
    } catch (err) {
        console.log(err);
        next();
    }
}
export async function getVCardDetail(req, res, next) {
    try {
        const getVCardDetail = await VCardDetailDB.find();
        res.status(200).json({
            message: "get successfully",
            data: getVCardDetail,
        });
    } catch (err) {
        next();
    }
}

export async function deleteVCardDetail(req, res, next) {
    try {
        const data = req.params;
        const vCardDetailId = data.id;
        const deleteVCardDetail = await VCardDetailDB.findByIdAndDelete(
            vCardDetailId
        );
        res.status(200).json({
            message: "Deleted Successfully",
            data: deleteVCardDetail,
        });
    } catch (error) {
        next();
    }
}

export async function updateVCardDetail(req, res, next) {
    try {
        const data = req.body;
        const id = req.params.id;
        const details = {
            vCardForm: {
                urlAlias: data.urlAlias,
                vCardName: data.vCardName,
                occupation: data.occupation,
                description: data.description,
            },
            vCardDetails: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                alternateEmail: data.alternateEmail,
                location: data.location,
                locationURL: data.locationURL,
                dob: data.dob,
                company: data.company,
                defaultLanguage: data.defaultLanguage
            }
        };
        const updateVCardDetail = await VCardDetailDB.findByIdAndUpdate(id, details, {
            new: true,
        });
        res.status(200).json({
            message: "create successfully",
            data: updateVCardDetail,
        });
    } catch (err) {
        next();
    }
}
