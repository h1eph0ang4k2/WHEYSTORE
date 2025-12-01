using MyRow = wheystore.SanPhamDB.ChiTietDonHangRow;

namespace wheystore.SanPhamDB;

public interface IChiTietDonHangListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class ChiTietDonHangListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IChiTietDonHangListHandler
{
}