"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const general_dto_1 = require("../general.dto");
const connection_service_1 = require("../connection.service");
const matchCodeExclude = '-';
const effortExclude = ['SILOFOLIE', 'PELLETS LOSE', 'MIETE/MTL']
    .map((v) => `'${v}'`)
    .join(',');
let OrderService = class OrderService {
    constructor(_connService) {
        this._connService = _connService;
    }
    async readAllByDate(date) {
        const month = ('0' + String(date.getMonth() + 1)).slice(-2);
        const day = ('0' + String(date.getDate())).slice(-2);
        const dateFormat = `${date.getFullYear()}/${month}/${day}`;
        const clientNr = 1;
        const ignoreBelegArten = '(4)';
        const mapTypeOfWork = [
            'liefern',
            'stellen',
            'holen',
            'tauschen',
        ];
        const orders = await this._connService.connection.query(`SELECT BearbNr as processingNumber, BelegArt as typeOfWork, Datum1 as fertig, I3MatchCode as disposal, Datum2 as stellen, TErfassung.info3 as comment, TErfassung.I3MatchCode2 as trashTypes, TContainer.InhaltCbm as containerType, TGebuehren.Text2 as containerDescription,  TKunden.Name2 as customerName, TKunden.PLZ as customerPLZ, TKunden.Ort as customerCountry, TKunden.Strasse as customerStreet, TKunden.Telefon as phone, TKostenstellen.Text2 as costStreet, TKostenstellen.Text3 as costCountry, TContainer.Bezeichnung as containerName from (((((select * from TErfassung where (Datum1 = '${dateFormat}' or Datum2 = '${dateFormat}') and MandNr = ${clientNr} and BelegArt not in ${ignoreBelegArten} ) as TErfassung left join ( select * from TContainer ) as TContainer on (TErfassung.Art = TContainer.GebTyp)) left join TGebuehren on (TGebuehren.NR = TContainer.GebTyp)) left join ( select * from TKunden where TKunden.MandNr = ${clientNr}  ) as TKunden on (TErfassung.KundenNr = TKunden.KundenNr)) left join ( select * from TKostenstellen where TKostenstellen.MandNr = ${clientNr} ) as TKostenstellen on (TErfassung.KundenNr = TKostenstellen.KundenNr) and TKostenstellen.KostenstelleId = TErfassung.Kostenstelle) where NOT TErfassung.I3MatchCode Like '%${matchCodeExclude}%' AND NOT TErfassung.Art in (${effortExclude})`);
        return orders.map((v) => {
            var _a;
            const useCostAddress = v.costCountry || v.costStreet;
            const address = {};
            if (!useCostAddress) {
                (address.country = v.customerCountry),
                    (address.plz = v.customerPLZ),
                    (address.street = v.customerStreet);
                address.valid = true;
            }
            else {
                const splited = v.costCountry.split(' ');
                address.country = splited.length > 0 ? splited[0] : null;
                address.plz = splited.length > 1 ? splited[1] : null;
                address.street = v.costStreet;
                address.valid = !(!address.street ||
                    (!address.country && !address.plz));
            }
            return {
                processingNumber: v.processingNumber,
                customerName: v.customerName,
                typeOfWork: mapTypeOfWork[new String(v.typeOfWork).toLowerCase()],
                trashTypes: ((_a = v.trashTypes) === null || _a === void 0 ? void 0 : _a.split(',')) || [v.trashTypes],
                containerType: v.containerType,
                containerName: v.containerName ? v.containerName.split(' ')[0] : '-',
                containerDescription: v.containerDescription,
                visible: true,
                comment: v.comment,
                phone: v.phone,
                disposal: v.disposal,
                address,
            };
        });
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [connection_service_1.ConnectionService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map