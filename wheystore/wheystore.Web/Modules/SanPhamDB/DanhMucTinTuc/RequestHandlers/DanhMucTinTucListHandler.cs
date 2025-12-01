using MyRow = wheystore.SanPhamDB.DanhMucTinTucRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucTinTucListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class DanhMucTinTucListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IDanhMucTinTucListHandler
{
}