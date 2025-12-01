using MyRow = wheystore.SanPhamDB.SanPhamLienQuanRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamLienQuanSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamLienQuanSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamLienQuanSaveHandler
{
}