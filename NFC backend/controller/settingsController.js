import SettingsDB from "../model/SettingsModel.js";

export async function createSettings(req, res, next) {
    console.log("hi");
    try {
        const data = req.body;
        console.log(req, "data")
        const details = {
            stripe: {
                striptKey: data.stripe.striptKey,
                stripeSecret: data.stripe.stripeSecret,
            },
            paypal: {
                clientID: data.paypal.clientID,
                paypalSecret: data.paypal.paypalSecret,
                mode: data.paypal.mode,
                email: data.paypal.email,
                currency: data.paypal.currency,
            },
            affliation: data.affliation,
            contact: data.contact,
            vCardStickyBar: data.vCardStickyBar,
            timeFormat: data.timeFormat
        };
        const createSettings = await SettingsDB.create(details);
        console.log(createSettings, 'sdf')
        res.status(201).json({
            message: "Created Successfully",
            data: createSettings,
        });
    } catch (err) {
        console.log(err);
        next();
    }
}
export async function getSettings(req, res, next) {
    try {
        const getSettings = await SettingsDB.find();
        res.status(200).json({
            message: "get successfully",
            data: getSettings,
        });
    } catch (err) {
        next();
    }
}

export async function deleteSettings(req, res, next) {
    try {
        const data = req.params;
        const SettingsId = data.id;
        const deleteSettings = await SettingsDB.findByIdAndDelete(
            SettingsId
        );
        res.status(200).json({
            message: "Deleted Successfully",
            data: deleteSettings,
        });
    } catch (error) {
        next();
    }
}

export async function updateSettings(req, res, next) {
    try {
        const data = req.body;
        const id = req.params.id;
        const details = {
            stripe: {
                striptKey: data.stripe.striptKey,
                stripeSecret: data.stripe.stripeSecret,
            },
            paypal: {
                clientID: data.paypal.clientID,
                paypalSecret: data.paypal.paypalSecret,
                mode: data.paypal.mode,
                email: data.paypal.email,
                currency: data.paypal.currency,
            },
            affliation: data.affliation,
            contact: data.contact,
            vCardStickyBar: data.vCardStickyBar,
            timeFormat: data.timeFormat
        };
        const updateSettings = await SettingsDB.findByIdAndUpdate(id, details, {
            new: true,
        });
        res.status(200).json({
            message: "create successfully",
            data: updateSettings,
        });
    } catch (err) {
        next();
    }
}
