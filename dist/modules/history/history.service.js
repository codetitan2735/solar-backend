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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const typeorm_2 = require("typeorm");
const history_entity_1 = require("./entities/history.entity");
let HistoryService = class HistoryService {
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async createHistory(historyDto) {
        const history = new history_entity_1.History();
        if (historyDto) {
            history.type = historyDto.type;
            history.borrowerAtion = historyDto.borrowerAction;
            history.lenderAtion = historyDto.lenderAction;
            history.userId = historyDto.userId;
            history.collectionAddress = historyDto.collectionAddress;
            history.tokenId = historyDto.tokenId;
        }
        await this.historyRepository.save(history);
        return history;
    }
    async getHistorys(options) {
        const result = await (0, nestjs_typeorm_paginate_1.paginate)(this.historyRepository, options);
        return result ? result : null;
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.History)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map