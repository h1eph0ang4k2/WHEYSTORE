import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ReviewRow } from "./ReviewRow";

export interface ReviewColumns {
    Id: Column<ReviewRow>;
    SanPhamId: Column<ReviewRow>;
    KhachHangId: Column<ReviewRow>;
    UserId: Column<ReviewRow>;
    Rating: Column<ReviewRow>;
    TieuDe: Column<ReviewRow>;
    NoiDung: Column<ReviewRow>;
    AnhReview: Column<ReviewRow>;
    DaDuyet: Column<ReviewRow>;
    SoLanHuuIch: Column<ReviewRow>;
    BiAn: Column<ReviewRow>;
    CreatedAt: Column<ReviewRow>;
    UpdatedAt: Column<ReviewRow>;
}

export class ReviewColumns extends ColumnsBase<ReviewRow> {
    static readonly columnsKey = 'SanPhamDB.Review';
    static readonly Fields = fieldsProxy<ReviewColumns>();
}