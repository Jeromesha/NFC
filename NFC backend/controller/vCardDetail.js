import VCardDetailDB from "../model/VCardDetailModel.js";

export async function createVCardDetail(req, res, next) {
    console.log("hi");
    try {
        const data = req.body;
        console.log(req, "data")
        const details = {
            vCardForm: {
                urlAlias: data.vCardForm.urlAlias,
                vCardName: data.vCardForm.vCardName,
                occupation: data.vCardForm.occupation,
                description: data.vCardForm.description,
            },
            vCardDetails: {
                firstName: data.vCardDetails.firstName,
                lastName: data.vCardDetails.lastName,
                email: data.vCardDetails.email,
                phone: data.vCardDetails.phone,
                alternateEmail: data.vCardDetails.alternateEmail,
                location: data.vCardDetails.location,
                locationURL: data.vCardDetails.locationURL,
                dob: data.vCardDetails.dob,
                company: data.vCardDetails.company,
                defaultLanguage: data.vCardDetails.defaultLanguage,
            },
            service: {
                serviceName: data.service.serviceName,
                serviceURL: data.service.serviceURL,
                serviceDesc: data.service.serviceDesc,
                serviceImage: data.service.serviceImage,
            },
            product: {
                productName: data.product.productName,
                productPrice: data.product.productPrice,
                currency: data.product.currency,
                productURL: data.product.productURL,
                productDesc: data.product.productDesc,
            },
            testimonials: {
                testName: data.testimonials.testName,
                testDesc: data.testimonials.testDesc,
                testImage: data.testimonials.testImage
            },
            socialMedia: {
                website: data.socialMedia.website,
                xurl: data.socialMedia.xurl,
                linkedIn: data.socialMedia.linkedIn,
                email: data.socialMedia.email,
                instagram: data.socialMedia.instagram,
                tumbler: data.socialMedia.tumbler,
                facebook: data.socialMedia.facebook,
                whatsapp: data.socialMedia.whatsapp,
            }
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
            defaultLanguage: data.defaultLanguage,
            serviceName: data.serviceName,
            serviceURL: data.serviceURL,
            serviceDesc: data.serviceDesc,
            serviceImage: data.serviceImage,
            productName: data.productName,
            productPrice: data.productPrice,
            currency: data.currency,
            productURL: data.productURL,
            productDesc: data.productDesc,
            // }
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
