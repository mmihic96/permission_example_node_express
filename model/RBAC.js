/**
 * RBAC or Role Based Access Control is an access control method where each identity is assigned a role and the roles determine what access rights the identity has.
 */

let permissionInstance = null;
class RBAC {
    constructor() {
        this.roles = {
            admin: {
                can: ['create', 'retrieve', 'update', 'delete']
            },
            user: {
                can: []
            },
        }
    }

    can(operation) {
        let _self = this;
        return function (req, res, next) {
            let role = req.body.role;
            if (_self.roles[role] && _self.roles[role].can.indexOf(operation) !== -1) {
                next();
            } else {
                res.status(403).send("Forbidden");
            }
        }
    }
}

if (!module.exports) {
    module.exports = {};
}

function getPermissionInstance() {
    if (!permissionInstance) {
        permissionInstance = new RBAC();
    }
    return permissionInstance;
}

module.exports.getPermissionInstance = getPermissionInstance;