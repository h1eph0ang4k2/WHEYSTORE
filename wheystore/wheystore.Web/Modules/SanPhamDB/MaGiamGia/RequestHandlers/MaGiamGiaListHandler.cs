using MyRow = wheystore.SanPhamDB.MaGiamGiaRow;

namespace wheystore.SanPhamDB;

public interface IMaGiamGiaListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class MaGiamGiaListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IMaGiamGiaListHandler
{
}